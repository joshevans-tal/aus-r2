// ---------------------------------------------------------------------
// ******** DATA SLIDER - By Josh Evans *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    
    **  This script is called from "cover-state-death-edit.js"
    
        First, sliderInit(productName) is called.
        It returns a slider to a var in the edit script
        Eg. let slider1 = sliderInit('death-fixed');
    
    1.  SLIDER INIT
        > Is a return func
        > Uses other slider functions to build content
        > Requires a specific product name to use in switch cases
        > Switch cases set value of global sData & sProduct (in data/scenario... file), assigning them the required
          references to product scenario data needed for the slider
        > It then starts building HTML to return using:
            createSliderHTML(productName, "units");
            NOTE: I can't remember why I added "units" parameter - seems redundant... but code is breaking without it. 
    2.  BUILD SLIDER HTML with createSliderHTML(productName, sliderType)
        > Is a return func
        > as above there seems to be redundant code "units" -> sliderType ?? Investigate
        > This script take the productName and uses it to check the slider type
          by checking sData.coverType
        > It uses that to choose between a Fixed or age-based slider type using:
            if(sData.coverType === "Fixed"){...}
        > The chosen slider is returned as html to the sliderInit() function
    3. BACK TO SLIDER INIT
        > slider init then creates a slider array to return to the calling Variable
        eg. 
        CALLING VARIABLE BECOMES AN ARRAY:
        'slider2' will now equal = slider2[]
        WHY? Because sliderReturn returns:
        let sliderReturn = [sliderContent, productName + "-slider", productName + "-tooltip", productName + "-text-input", productName + "-text-label"];
        
        This means if productName was "death-fixed" slider2[] would be:
           [
            fixed slider HTML with death data (max, min etc), .. // slider2[0]
            "death-fixed-slider", .............................. // slider2[1]
            "death-fixed-tooltip", ............................. // slider2[2]
            "death-fixed-text-input", .......................... // slider2[3]
            "death-fixed-text-label" ........................... // slider2[4]
            ]

    4. LISTENER SCRIPTS FOR SLIDER AND TEXT INPUT
        Listener scripts are included in this file including:
        - sliderListener()          ..... See explanation below
        - textInputUpdates()        ..... added to the html input returned from createSliderHTML
        - updateTooltipPosition()   ..... called as needed

        The sliderListener is initiated from edit-state scripts (cover-state-death-edit.js)
        after sliders are created. They use the provided array to do so:
        Eg. sliderListener(slider2[1], slider2[2], slider2[3], slider2[4]);

*/

// --------------------------------------------------------------------
//   DATA SET UP - THIS REFERENCES AND UPDATES THE GLOBAL SCENARIO DATA 
// --------------------------------------------------------------------
/*
    Access the insuranceProducts array within currentCover
    var insuranceProductsArray = currentCover.insuranceProducts;
    var deathDataFixed = insuranceProductsArray[0].coverages[0];
    var deathDataAged = insuranceProductsArray[0].coverages[1];
    var tpdDataFixed = insuranceProductsArray[1].coverages[0];
    var ipData = insuranceProductsArray[2].coverages[0];
    let sData = deathDataFixed;
    let sProduct = insuranceProductsArray[0].product;

    // education:
    var eduCoverTypes = manageCoverContentArray[2].content[0];
    var tooltips = manageCoverContentArray[3].content[0];
*/

// ---------------------------------------------------------------------

function sliderInit(productName) {
    
    // TAKE PRODUCT NAME AND UPDATE GLOBAL PRODUCT VARS
    // sData = deathData;
    // sProduct = insuranceProductsArray[0].product;

    switch (productName) {
        case 'death-fixed':
            // code block
            sData = deathDataFixed;
            sProduct = insuranceProductsArray[0].product;
            break;
        case 'death-age-based':
            // code block
            sData = deathDataAged;
            sProduct = insuranceProductsArray[0].product;
            break;
        case 'tpd-fixed':
            // code block
            sData = tpdDataFixed;
            sProduct = insuranceProductsArray[1].product;
            break;
        case 'tpd-age-based':
            // code block
            sData = tpdDataAged;
            sProduct = insuranceProductsArray[1].product;
            break;
        
        case 'ip-fixed':
            // code block
            sData = ipDataFixed;
            sProduct = insuranceProductsArray[2].product;
            break;
        default:
            // code block
    }

    // Set html content var - Content at this point would sit above slider
    let sliderContent = '';
    
    // ADD slider html to 'sliderContent' by passing productName. 
    // NOTE: The "units" parameter seems redundant, but breaks code if not used - CLEAN UP?!
    sliderContent += createSliderHTML(productName, "units");
    
    //  CREATE AN ARRAY
    let sliderReturn = [sliderContent, productName + "-slider", productName + "-tooltip", productName + "-text-input", productName + "-text-label", productName +"-item-value"]; 

    // console.log("SliderReturn is: "+sliderReturn[0]);
    // Return the generated HTML content
    return sliderReturn;
}


// function createSliderHTML(productName, sliderType){
    function createSliderHTML(productName, sliderType){
// window.alert("Booo!");
    let slider = "";

    if(sData.coverType === "Fixed"){
        // console.log("this slider is: "+sliderType+"\nStep is: "+sData.step);
        slider += `<div id="test" class="slider-outer">
        <div id='${productName}-slider-container' class="slider-container">
            <input id='${productName}-slider' type="range" class="slider" min="${sData.min}" max="${sData.max}" step="${sData.step}" value="${sData.benefit}">
            <div id="${productName}-tooltip" class="slider-tooltip">${formatCurrency(sData.benefit,0)}</div>
            <div id="${productName}-min" class="label min-label">${formatCurrency(sData.min,0)}</div>
            <div id="${productName}-max"class="label max-label">${formatCurrency(sData.max,0)}</div>
        </div>
        <div id="${productName}-text-edit-container" class="slider-text-input-container">
            <div class="label slider-text-label">${sProduct} benefit</div>
            <span class="input-prefix">$</span>
            <input id="${productName}-text-input" 
                class="slider-text-input" 
                type="number" 
                min="${sData.min}" 
                max="${sData.max}" 
                step="${sData.step}" 
                value="${sData.benefit}"
                oninput="textInputUpdates('${productName}-text-input', '${productName}-text-input.value','${productName}-slider', '${productName}-tooltip', ${sData.min}, ${sData.max}, '${productName}-item-value')"
                >
        </div>
        </div>`;
    } else {
        {
            let dataOptions = "";
            for(let i=0; i < sData.max; i+=sData.step){
                // console.log(i);
                dataOptions += `<option class="unit-marks">${i}</option>`;
            }
            // console.log("this slider is: "+sliderType);
            slider += `<div id="test" class="slider-outer">
            <div id='${productName}-slider-container' class="slider-container">
                <input id='${productName}-slider' type="range" class="slider" min="${sData.min}" max="${sData.max}" step="${sData.step}" value="${sData.benefit}" list="${productName}-unit-marks">
                <datalist id="${productName}-unit-marks" class="unit-marks">
                    ${ dataOptions }
                </datalist>
                <div id="${productName}-tooltip" class="slider-tooltip">${formatCurrency(sData.benefit,0)}</div>
                <div id="${productName}-min" class="label min-label">${formatCurrency(sData.min,0)}</div>
                <div id="${productName}-max class="label max-label">${formatCurrency(sData.max,0)}</div>
            </div>
            <div id="${productName}-text-edit-container" class="slider-text-input-container">
                <div class="label slider-text-label">${sProduct} units: <span id="${productName}-text-label">${sData.benefit/sData.step}</span></div>
                <span class="input-prefix">$</span>
                <input id="${productName}-text-input" 
                    class="slider-text-input" 
                    type="number" 
                    min="${sData.min}" 
                    max="${sData.max}" 
                    step="${sData.step}"
                    value="${sData.benefit}"
                    oninput="textInputUpdates('${productName}-text-input', '${productName}-text-input.value','${productName}-slider', '${productName}-tooltip', ${sData.min}, ${sData.max}, '${productName}-item-value')"
                    >
            </div>
            </div>`;
        }
    // oninput="textInputUpdates('${productName}-text-input', '${productName}-text-input.value','${productName}-slider', '${productName}-tooltip', ${sData.min}, ${sData.max})"
    }

    return slider;
}



// ----------------------------------------------------------------
//   SLIDER + TEXT INPUT LISTENERS
// ----------------------------------------------------------------

function sliderListener(sliderId, tooltipId, textId, textLabelId, coverItemId, coverItemTotal) {
    //----- VARS -----
    // console.log("First text id check: " + textLabelId);
    let slider = document.getElementById(sliderId);
    let tooltip = document.getElementById(tooltipId);
    let textInputLabel = document.getElementById(textLabelId);
    let textInput = document.getElementById(textId);
    let coverItemValue = document.getElementById(coverItemId);
    // let coverItemTotal = document.getElementById(coverItemTotal);

    //----- SLIDER LISTENER -----
    slider.addEventListener('input', function () {
        // set tooltip text
        tooltip.textContent = formatCurrency(slider.value, 0);
        // set text input
        textInput.value = slider.value;
        console.log("slider.value: " + slider.value + "\ntextId: " + textId);
        // set tooltip position
        updateTooltipPosition(slider, tooltip);
        if(textInputLabel){
            textInputLabel.innerHTML = slider.value/slider.step;
        }
        sessionStorage.setItem(sliderId, slider.value);
        coverItemValue.innerHTML = formatCurrency(slider.value, 0); //death-fixed-item-value
        // console.log("textInputLabel:::::: "+textInputLabel);
        
    });

    //----- TEXT LISTENER -----
    

    updateTooltipPosition(slider, tooltip);
}



// ----------------------------------------------------------------
//   TEXT INPUT LISTENERS
// ----------------------------------------------------------------

function textInputUpdates(senderId, value, sliderId, tooltipID, txtMin, txtMax, textLabelId, coverItemId){
    // console.log("TextInputUpdates func::: "
    // + "\nSenderText: " + senderId
    // + "\nvalue: " + value   
    // + "\nslider: " + sliderId
    // + "\ntooltip: " + tooltipId
    // + "\nmin: " + min
    // + "\nmax: " + max
    // )
    let txtInput = document.getElementById(senderId);
    let slider = document.getElementById(sliderId);
    let tooltip = document.getElementById(tooltipID);
    let textInputLabel = document.getElementById(textLabelId);
    let coverItemValue = document.getElementById(coverItemId);
    // console.log("coverItemValue: " + coverItemValue.id);

    
    // let min = txtMin;
    // let max = txtMax;
    if (txtInput.value <= txtMax && txtInput.value >= txtMin){
        // txtInput.classList.remove("danger");
        slider.value = txtInput.value;
        // console.log(document.getElementById("death-fixed-item-value").text);
        // document.getElementById("death-fixed-item-value").innerHTML = formatCurrency(txtInput.value,0);
        textInputLabel.innerHTML = formatCurrency(txtInput.value,0);
        console.log("TEXT INPUT else CHANGE IS HERE!!!!!!!!"+ formatCurrency(txtInput.value,0));
        // console.log("TtextInputLabel: "+ textInputLabel);
        tooltip.textContent = formatCurrency(slider.value, 0);
        updateTooltipPosition(slider, tooltip);
        if(textInputLabel){
            // textInputLabel.innerHTML = slider.value/slider.step;
            textInputLabel.innerHTML = formatCurrency(txtInput.value,0);
        }
    } else {
        // txtInput.classList.add("danger");
        txtInput.value = txtMax;
        slider.value = txtInput.value;
        console.log("TEXT INPUT else CHANGE IS HERE!!!!!!!!");
        tooltip.textContent = formatCurrency(slider.value, 0);
        updateTooltipPosition(slider, tooltip);
        if(textInputLabel){
            textInputLabel.innerHTML = slider.value/slider.step;
        }
    }

    if (txtInput.value === ""){
        // txtInput.classList.add("danger");
        // tooltip.classList.add("danger");
        slider.value = 0;
        updateTooltipPosition(slider, tooltip);
        tooltip.textContent = formatCurrency(slider.value, 0);
    }

    sessionStorage.setItem(sliderId, slider.value);
    coverItemValue.innerHTML = formatCurrency(slider.value, 0); //death-fixed-item-value
}

// ----------------------------------------------------------------
//   TOOLTIP POSITION
// ----------------------------------------------------------------

function updateTooltipPosition(slider, tooltip) {
    const sliderRect = slider.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    // console.log("sliderRect width: "+ sliderRect.width);
    // Calculate the percentage position of the slider handle
    const sliderValueRatio = (slider.value - slider.min) / (slider.max - slider.min);

    // Calculate the left position of the slider handle
    const sliderHandleLeft = sliderValueRatio * sliderRect.width;
    // console.log("sliderHandleLeft: "+ sliderHandleLeft);
    // Calculate the center position for the tooltip
    // const tooltipLeft = sliderRect.left + sliderHandleLeft - (tooltipRect.width / 2) + 12;
    const tooltipLeft = sliderHandleLeft ;
    // console.log("\nsliderRect width: "+ sliderRect.width
    //     + "\ntooltipLeft: "+ tooltipLeft
    //     + "\ntooltip Width: "+ tooltipRect.width
    //     + "\nSUM elements: "
    //     + "\nsliderRect.left: "+ sliderRect.left
    //     + "\nsliderHandleLeft: "+ sliderHandleLeft
    //     );
    // console.log("tooltip Width: "+ tooltipRect.width);
    // Apply the calculated left position to the tooltip
    tooltip.style.left = `${tooltipLeft}px`;
}

