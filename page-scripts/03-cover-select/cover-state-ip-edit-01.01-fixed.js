// ---------------------------------------------------------------------
// ******** CUSTOM COVER – DEATH - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    

    **  This script is called from "cover-state-ip-current.js"
    
        First, ipEditInner(id) is called. It is passed a reference to the 
        outer-card body with ipEditInner(ipBody);
    
    1.  DEATH EDIT INNER FUNC STARTS PROCESS
        > Is NOT a return func – it creates directly into the given id using innerHTML
        
    FIRST : MAIN Structure
        1.1 | It sets up the 'content' var
        1.2 | It creates an inner card with no education or action
                - This creates an inner card id 'ip-edit-card-body'
        1.3 | Create a 'reset' btn, which calls ip current cover, 
              sending back the given outer card id with ipCurrentInner(ipBody);
    SECOND : INNER STRUCTURE
        1.4 | It then creates a var to hold inner-card body id: 'ipEditBody'
        1.5 | The inner-card body is populated first with innerHTML = ipEditInnerContent();
                > This is a return function
                > It returns html structure including:
                    - Age-based switch on/off pattern
                    - Fixed slider containers with hard coded ids
    THIRD : EDIT FUNCTIONS ARE BUILT
        1.6 | Once the html content structure is in place, the sliders are added
              using a function call 'createIPSliders();'
        1.7 | Create-slider function is a hard coded slider call. It is:
                > specific to ip right now
                > knows the specific ids add for the ip slider
                > Initiates a slider using a specific product name
                    eg. let slider1 = sliderInit('ip-fixed');

       

    !!!! IMPORTANT !!!!
    THIS SCRIPT ASSUMES::
       
        >   The HTML page <script src="./cover-choice-page-structure.js"></script> at the bottom of the page
            or has some other way of being called. This script won't call itself. 


*/


// ---------------------------------------------------------------------
// 02  |||  CREATE DEATH INNER CARD
// ---------------------------------------------------------------------

function ipEditInnerFixed(id){
    /// 1 || START CONTENT INSIDE OUTER CARD
    let content = `<p>Select your new Income Protection benefit options below.</p>
    <div class="space v-small"><!-- SPACER! --></div>
    <p><strong>Select your cover type:</strong><p>
    <div class="space v-medium"><!-- SPACER! --></div>
    <div class="make-flex flex-gap-small">
    <button class='secondary btn-medium' onclick='ipEditInnerFormula(ipBody)'><img src="images/icons/radio-deselected.svg" /> Formula</button>
    <button class='primary btn-medium ' onclick='ipEditInnerFixed(ipBody);'><img src="images/icons/radio-selected.svg" /> Fixed 2</button>
    </div>
    <div class="space v-large"><!-- SPACER! --></div>
    `;


    // 2 || CREATE INNER CARD

    content += tcCard(
        `ip-edit`,
        `bglight`,
        `IP fixed benefit:`,
        `hide`,
        `window.alert('Education content about cover types')`,
        ``,
        `Initialise`
        );
    
    // 3 || ADD CONTENT AFTER INNER CARD
    content += `<button class='secondary btn-medium btn-full'onclick='ipCurrentInnerCard(ipBody);'><img src="images/icons/ic-reset.svg" /> Reset to existing cover</button>`
    id.innerHTML = content;
    
    let ipEditBody = document.getElementById('ip-edit-card-body');

    ipEditBody.innerHTML += ipEditInnerContentFixed(); // THIS IS THE INNER CONTENT
        // ipEditInnerContent();
        createIPSliders();
}



// ---------------------------------------------------------------------
// CREATE IP INNER CONTENT
// ---------------------------------------------------------------------

/*

*********************************************
//   DATA SET UP - used by all pages
*********************************************
// Access the insuranceProducts array within currentCover

var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var tpdDataAged = insuranceProductsArray[1].coverages[1];
var ipData = insuranceProductsArray[2].coverages[0];
let sData = deathDataFixed;
let sProduct = insuranceProductsArray[0].product;

*/

// ---------------------------------------------------------------------
// 03  |||  CALCULATE TOTAL PREMIUM - TO DO!!!!
// ---------------------------------------------------------------------
function ipTotalPremiumFixed(coverArray){
    
    let totalPremium = '';
    for(i=0; i<coverArray.length; i++){
        totalPremium += coverArray[i];
    }
    
    return totalPremium;
}
/*
// TOTAL BENEFIT
let currentTotalIPBenefitFixed = updateTotalBenefit([ipData.max,ipData.benefit]);
console.log('currentTotalIPBenefit: '+currentTotalIPBenefit);

function updateTotalBenefit(coverArray){
    
    let totalBenefit = '';
    for(i=0; i<coverArray.length; i++){
        totalBenefit += coverArray[i];
    }
    
    return totalBenefit;
}
*/

// ---------------------------------------------------------------------
// 04  |||  RETURN - INNER CARD CONTENT STRUCTURE
// ---------------------------------------------------------------------
function ipEditInnerContentFixed(){

    // ************** ADD CONTENT WHEREVER YOU WANT ***********
    // content += `I'm inside inner ip. Yipee! ipData.benefit: ${ipData.benefit}`;
    
    // document.getElementById("slider-test").innerHTML = "WHWOOHWONWWNOWKLJ";
    // Total premium calc
    let ipPremiumCurrent = (ipData.benefit*ipData.premiumBase + ipData.benefit*ipData.premiumBase);
    console.log('ipEditInnerConentFixed just ran');
    // createIPIPSliders(ipBody);
    // Content var to return
    /*
    content = `Fixed pattern`;
    
    content += `<div class="tc-inline-alert make-flex column low-contrast">`;

    content += `
    ${createCoverItemDefault(
    "Basic IP Cover",
    ipData.coverType,
    ipData.max,
    "Age-based changes your benefit amount with your age, while keeping your premiums more steady.",
    'basic-ip-aged')}`;
    content += tcSwitch('ip-aged-switch','Don\'t include', 'Include','round','checked');

    content += `</div>`;
        */
    
    content = ``;
    content += `<div id="slider-container-ip-fixed"></div>
                <div id="slider-container-ip-aged"></div>
                <br>`;
    content += `<div>
    <label for="benefitPeriodSelect">Benefit Period:</label>
    <div class="space v-small"><!-- SPACER! --></div>
    <select id="benefitPeriodSelect" style="display:block; width:100%;" onchange="updateFixedIpPremium()">
        <option value="2 years" selected>2 years</option>
        <option value="5 years">5 years</option>
        <option value="to age 65">to age 65</option>
    </select>
</div>
<div class="space v-large"><!-- SPACER! --></div>
<div>
    <label for="waitingPeriodSelect">Waiting Period:</label>
    <div class="space v-small"><!-- SPACER! --></div>
    <select id="waitingPeriodSelect" style="display:block; width:100%;" onchange="updateFixedIpPremium()">
        <option value="30 days">30 days</option>
        <option value="60 days" selected>60 days</option>
        <option value="90 days">90 days</option>
    </select>
</div>
<div class="space v-large"><!-- SPACER! --></div>`;

    /*
    // Cover items at bottom of card
    content += `<div class="accordion-container">`;
    content += `${createCoverItemDefault(
        "IP cover",
        'Basic',
        ipData.max,
        "Our Basic cover is an Age-based cover, which changes your benefit amount with your age, while keeping your premiums more steady.",
        'ip-aged')}`;

    content += `${createCoverItemDefault(
        "IP cover",
        ipData.coverType,
        ipData.benefit,
        "Age-based changes your benefit amount with your age, while keeping your premiums more steady.",
        'ip-fixed')}`;
    
    content += `${createCoverItemTotal('Total ip:', currentTotalIPBenefit, '','total-ip-value-item')}
        `
    // content += `<div id="ip-total-premium" class="total-premium">This is the total premium: ${ipPremiumCurrent}</div>`;

    content += `</div>`;
*/
    return content;
    
}




// ---------------------------------------------------------------------
// 05  |||  CREATE SLIDERS
// ---------------------------------------------------------------------

function createIPSliders(id){

    console.log('createIPSlider ran');
    // ----------------------------------------------------------------
    // SLIDERS CAN BE CREATED IN THE FOLLOWING DIVS
    // ----------------------------------------------------------------
        /* 
        let sliderDivs = `
        <div id="slider-container-ip-fixed"></div>
        <div id="slider-container-ip-aged"></div>`
        */
    // document.getElementById(id).innerHTML = sliderDivs;

    /* 
    CREATE IP fixed slider
    This means if productName was "ip-fixed" slider2[] would be:
           [
            fixed slider HTML with ip data (max, min etc), .. // slider2[0]
            "ip-fixed-slider", .............................. // slider2[1]
            "ip-fixed-tooltip", ............................. // slider2[2] 
            "ip-fixed-text-input", .......................... // slider2[3] ––> text input
            "ip-fixed-text-label" ........................... // slider2[4] ––> text input label
            "ip-fixed-item-value" ........................... // slider2[5] ––> total cover item
            ]
    */
    
    // ----------------------------------------------------------------
    // INIT SLIDER - setting 'slider1' as an array
    // ----------------------------------------------------------------      
    let slider3 = sliderInitIP('ip-fixed');
    // Add slider html to document
    document.getElementById('slider-container-ip-fixed').innerHTML = slider3[0];
    // Add listeners using slider id and tooltip id
    sliderListenerIP(slider3[1], slider3[2], slider3[3], slider3[4], slider3[5]);

    console.log(`
                \n slider1[1]: ${slider3[1]},
                \n slider1[2]: ${slider3[2]},
                \n slider1[3]: ${slider3[3]},
                \n slider1[4]: ${slider3[4]}`);
    
    // ----------------------------------------------------------------
    // SET SESSION STORAGE - FOR SLIDER
    // ----------------------------------------------------------------
    sessionStorage.setItem(slider3[1], document.getElementById(slider3[1]).value);

    // console.log('currentTotalIPBenefit: '+currentTotalIPBenefit);
    // ----------------------------------------------------------------
    // LISTENER - DEATH AGED SWITCH
    // ----------------------------------------------------------------
    let ipCurrentInnerFooter = document.getElementById('ip-edit-card-footer');
    /*
    const checkbox = document.getElementById("ip-aged-switch");
    let ipAgedCoverItem = document.getElementById('ip-aged-item-value');
    const ipTotalCoverItem = document.getElementById('total-ip-value-item');
    let ipCurrentInnerFooter = document.getElementById('ip-edit-card-footer');
    updateCoverItemTotalsIP();
    checkbox.checked = true;
    sessionStorage.setItem('ip-aged', checkbox.checked);
    
    // // 4.1 || FILL INNER CARD FOOTER WITH CONTENT
    // // Get the reference id
    // let ipCurrentInnerFooter = document.getElementById('ip-current-card-footer');
    // // Add content to that it
    // ipCurrentInnerFooter.innerHTML = ipCurrenInnerFooterContent();
    
    if (checkbox) {
        sessionStorage.setItem('ip-aged', ipData.max);
        console.log("Switch state is: " + this.checked);
        checkbox.addEventListener('change', function() {
            // console.log("Switch state is: " + this.checked);
            // Call any function here with `this.checked` as parameter
            
            if(this.checked){
                console.log('This is checked!!!! - i can change stuff');
                ipAgedCoverItem.innerHTML = formatCurrency(ipData.max, 0);
                sessionStorage.setItem('ip-aged', ipData.max);
                updateCoverItemTotalsIP();
            } else {
                ipAgedCoverItem.innerHTML = formatCurrency(ipData.benefit,0);
                console.log('This is checkbox false/else condition');
                sessionStorage.setItem('ip-aged', ipData.benefit);
                updateCoverItemTotalsIP();
            }

        });
    }
    */


    updateIpFixedFooter(ipAAL);


// vvvvvvvvvvvvvv TESTING THIS vvvvvvvvvvvvvvvvvv
    function updateCoverItemTotalsIP(){
        currentFixed = document.getElementById('ip-fixed-slider').value;
        // currentAged = sessionStorage.getItem('ip-aged');
        // ipTotalCoverItem.innerHTML = formatCurrency(Math.trunc(currentFixed) + Math.trunc(currentAged),0);
        console.log(`currentFixed: ${currentFixed}`);
        ipCurrentInnerFooter.innerHTML = ipEditInnerFooterContent(currentFixed);
    }


    let ipFixedSlider = document.getElementById('ip-fixed-slider');
    ipFixedSlider.addEventListener('input', function () {
        // updateCoverItemTotalsIP();
        // updateIpFixedFooter(this.value);
        updateFixedIpPremium();
        console.log('This is my new listener '+ this.value);
    });

    let ipFixedTxt = document.getElementById('ip-fixed-text-input');
    ipFixedTxt.addEventListener('input', function () {
        // updateCoverItemTotalsIP();
        // updateIpFixedFooter(this.value);
        updateFixedIpPremium();
        console.log('This is my new TEXT listener '+ this.value);
    });

    ipEditInnerFooterContent();   //@@@@@@@@@@@@@@@@@@@@@@@@

    function ipEditInnerFooterContent(fixed){
        let premium = (Math.trunc(fixed)*ipData.premiumBase);
        sessionStorage.setItem('ip-new-premium',premium);
        let content = `<div class="footer-premium">
            <div>Monthly premium: <div>
            <div>${formatCurrency(premium,0)}/mth</div>
            <div>`;
    
        return content;
    }
    


    // ----------------------------------------------------------------
    // UN-HIDE THIS FOR AN AGE_BASED SLIDER
    // ----------------------------------------------------------------
    // // CREATE IP age-based slider
    // let slider2 = sliderInit('ip-age-based');
    // // add slider to the page
    // document.getElementById('slider-container-ip-aged').innerHTML = slider2[0];
    // // Add listeners using slider id and tooltip id
    // sliderListener(slider2[1], slider2[2], slider2[3], slider2[4]);
    // ----------------------------------------------------------------


    // ----------------------------------------------------------------
    // REFERENCE FOR A FIXED IP SLIDER
    // ----------------------------------------------------------------
    // // CREATE IP flixed slider
    // let slider3 = sliderInit('ip-fixed');
    // // add slider to the page
    // document.getElementById('slider-container-ip-fixed').innerHTML = slider3[0];
    // // Add listeners using slider id and tooltip id
    // sliderListener(slider3[1], slider3[2], slider3[3], slider3[4]);
    // ----------------------------------------------------------------

    // function resetFixedIPSlider(){
    //     let slider = document.getElementById("ip-fixed-slider");
    //     let txtlabel = document.getElementsById("ip-fixed-max");
    //     let ipFixedMax = (ipData.salary/12)*ipData.max;
    //     slider.max = ipFixedMax;
    //     slider.step = ipFixedMax/(ipData.max*100);
    //     txtlabel.innerHTML = "hi";
    //     alert('I ran');
    // }
    
    // resetFixedIPSlider();
    
}
// Formula based selection
function updateFixedBenefit() {
    // var x = document.getElementById("ip-fixed-slider").value;
    var formulaBenefitSelect = document.getElementById("ip-fixed-slider").value;
    // alert("Index: " + formulaBenefitSelect[x].index + " is " + formulaBenefitSelect[x].text + " and value is " + formulaBenefitSelect[x].value);
    // document.getElementById("ip-benefit-agedbased").innerHTML = formatCurrency(formulaBenefitSelect.value,0)+" /mth";
    updateIpFixedFooter(formulaBenefitSelect.value);
  }

// Benefit selection
function getFixedBenfit() {
    // Get value of the slider
    var sliderValue = document.getElementById("ip-fixed-slider").value;
    // var formulaBenefitSelect = document.getElementById("ip-formula-benefit-select").options;

    return sliderValue;
  }

// Benefit period selection
function getFixedBenfitPeriod() {
    // Benefit period get selected option
    var x = document.getElementById("benefitPeriodSelect").selectedIndex;
    var fixedBenefitPSelect = document.getElementById("benefitPeriodSelect").options;

    return fixedBenefitPSelect[x].value;
  }

// Waiting period selection
function getFixedWaitingPeriod() {
    // Waiting period - get selected option
    var x = document.getElementById("waitingPeriodSelect").selectedIndex;
    var fixedWaitingPSelect = document.getElementById("waitingPeriodSelect").options;
    return fixedWaitingPSelect[x].value;
  }


// !!! UPDATE FIXED PREMIUM !!!
function updateFixedIpPremium(){
    const myBenefit = getFixedBenfit();
    updateFixedBenefit();
    const myBenefitPeriod = getFixedBenfitPeriod();
    const myWaitingPeriod = getFixedWaitingPeriod();
    const myMultiplier = ipMultiplierScheme[myBenefitPeriod][myWaitingPeriod];
    console.log("\n myMultiplier: "+ myMultiplier + "\n myBenefit: "+ myBenefit + "\n myBenefitPeriod: "+ myBenefitPeriod + "\n myWaitingPeriod: "+myWaitingPeriod);

    const myPremium = myBenefit * myMultiplier;
    console.log("myPremium: " + myPremium);
    updateIpFixedFooter(myPremium);
    updateIPCartFooter(myPremium);
}

function updateIpFixedFooter(benefit, waitingP, benefitP){

    let premium = calcIPPremiumFixed(benefit);

    document.getElementById('ip-edit-card-footer').innerHTML = `
    
    <div class="footer-premium">
        <div>
            <div>Monthly premium: </div>
            <div> ${formatCurrency(premium,2)} /mth</div>
        </div>
    </div>

    `;
}

function updateIPCartFooter(benefit, waitingP, benefitP){

    let premium = calcIPPremiumFixed(benefit);

    document.getElementById('cart-ip-item-value').innerHTML = `${formatCurrency(premium,2)} /mth`;
}

function calcIPPremiumFixed(benefit, waitingP, benefitP){
    return ipMultiplierScheme["2 years"]["60 days"]*benefit*ipMultiplier;
}

function calcIPPremiumFixed2(benefit, waitingP, benefitP){
    return ipMultiplierScheme[benefitP][waitingP]*benefit*ipMultiplier;
}