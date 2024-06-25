// ---------------------------------------------------------------------
// ******** CUSTOM COVER – DEATH - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    

    **  This script is called from "cover-state-death-current.js"
    
        First, deathEditInner(id) is called. It is passed a reference to the 
        outer-card body with deathEditInner(deathBody);
    
    1.  DEATH EDIT INNER FUNC STARTS PROCESS
        > Is NOT a return func – it creates directly into the given id using innerHTML
        
    FIRST : MAIN Structure
        1.1 | It sets up the 'content' var
        1.2 | It creates an inner card with no education or action
                - This creates an inner card id 'death-edit-card-body'
        1.3 | Create a 'reset' btn, which calls death current cover, 
              sending back the given outer card id with deathCurrentInner(deathBody);
    SECOND : INNER STRUCTURE
        1.4 | It then creates a var to hold inner-card body id: 'deathEditBody'
        1.5 | The inner-card body is populated first with innerHTML = deathEditInnerContent();
                > This is a return function
                > It returns html structure including:
                    - Age-based switch on/off pattern
                    - Fixed slider containers with hard coded ids
    THIRD : EDIT FUNCTIONS ARE BUILT
        1.6 | Once the html content structure is in place, the sliders are added
              using a function call 'createDeathSliders();'
        1.7 | Create-slider function is a hard coded slider call. It is:
                > specific to death right now
                > knows the specific ids add for the death slider
                > Initiates a slider using a specific product name
                    eg. let slider1 = sliderInit('death-fixed');

       

    !!!! IMPORTANT !!!!
    THIS SCRIPT ASSUMES::
       
        >   The HTML page <script src="./cover-choice-page-structure.js"></script> at the bottom of the page
            or has some other way of being called. This script won't call itself. 


*/


// ---------------------------------------------------------------------
// 02  |||  CREATE DEATH INNER CARD
// ---------------------------------------------------------------------

function deathEditInner(id){
    /// 1 || START CONTENT INSIDE OUTER CARD
    let content = '';

    content += `<div class="space v-medium"></div>`;


    // 2 || CREATE INNER CARD

    content += tcCard(
        `death-edit`,
        `bglight`,
        `Edit your Death cover`,
        `hide`,
        `window.alert('Education content about cover types')`,
        ``,
        `Initialise`
        );
    
    // 3 || ADD CONTENT AFTER INNER CARD
    content += `<button class='secondary btn-medium btn-full'onclick='deathCurrentInner(deathBody);'><img src="images/icons/ic-reset.svg" /> Reset to existing cover</button>`
    id.innerHTML = content;
    
    let deathEditBody = document.getElementById('death-edit-card-body');

    deathEditBody.innerHTML += deathEditInnerContent(); // THIS IS THE INNER CONTENT
        // deathEditInnerContent();
        createDeathSliders();
}



// ---------------------------------------------------------------------
// CREATE DEATH INNER CONTENT
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
function deathTotalPremium(coverArray){
    
    let totalPremium = '';
    for(i=0; i<coverArray.length; i++){
        totalPremium += coverArray[i];
    }
    
    return totalPremium;
}

// TOTAL BENEFIT
let currentTotalDeathBenefit = updateTotalBenefit([deathDataAged.max,deathDataFixed.benefit]);
console.log('currentTotalDeathBenefit: '+currentTotalDeathBenefit);

function updateTotalBenefit(coverArray){
    
    let totalBenefit = '';
    for(i=0; i<coverArray.length; i++){
        totalBenefit += coverArray[i];
    }
    
    return totalBenefit;
}

// ---------------------------------------------------------------------
// 04  |||  RETURN - INNER CARD CONTENT STRUCTURE
// ---------------------------------------------------------------------
function deathEditInnerContent(){

    // ************** ADD CONTENT WHEREVER YOU WANT ***********
    // content += `I'm inside inner death. Yipee! deathDataFixed.benefit: ${deathDataFixed.benefit}`;
    
    // document.getElementById("slider-test").innerHTML = "WHWOOHWONWWNOWKLJ";
    // Total premium calc
    let deathPremiumCurrent = (deathDataFixed.benefit*deathDataFixed.premiumBase + deathDataAged.benefit*deathDataAged.premiumBase);
    // createDeathTPDSliders(deathBody);
    // Content var to return
    
    content = `<p class="" style="margin-top: 8px;">Use the functions below to select the cover that fits your goals. Any increases you make to your cover may require underwriting.<br></p>`;

    content += `<div class="tc-inline-alert make-flex column low-contrast">`;
    
    content += `
    ${createCoverItemDefault(
    "Basic Death Cover",
    deathDataAged.coverType,
    deathDataAged.max,
    "Age-based changes your benefit amount with your age, while keeping your premiums more steady.",
    'basic-death-aged')}`;
    // content += tcSwitch('death-aged-switch','Don\'t include', 'Include','round','');
    content += tcSwitch('death-aged-switch','Remove', 'Keep','round','checked');

    // content += `<p class="caption" style="margin: 8px 16px;"><strong>Note:</strong> Basic Cover is only available when joining. It will not be offered again if it is removed.<br></p>`;
    
    content += `</div>`;

    content += `<br><p style="margin-top: 16px;"><strong>Add a <extra> fixed death cover</strong></p>`;
    // content += `<p class="caption">Unlike Basic Cover, adding extra fixed cover will require underwriting.<br></p>`
    content += `<div id="slider-container-death-fixed"></div>
                <div id="slider-container-death-aged"></div>
                <br>`;
    
    // Cover items at bottom of card
    content += `<div class="accordion-container" style="margin-bottom: 8px;" >`;
    content += `${createCoverItemDefault(
        "Death cover",
        'Age-based',
        deathDataAged.benefit, // set to deathDataAged.max when basic cover is default checked
        deathDataAged.education,
        'death-aged')}`;

    content += `${createCoverItemDefault(
        "Death cover",
        deathDataFixed.coverType,
        deathDataFixed.benefit,
        deathDataFixed.education,
        'death-fixed')}`;
    
    content += `${createCoverItemTotal('Total Death:', currentTotalDeathBenefit, '','total-death-value-item')}
        `
    // content += `<div id="death-total-premium" class="total-premium">This is the total premium: ${deathPremiumCurrent}</div>`;

    content += `</div>`;

    return content;
    
}




// ---------------------------------------------------------------------
// 05  |||  CREATE SLIDERS
// ---------------------------------------------------------------------

function createDeathSliders(id){
    // ----------------------------------------------------------------
    // SLIDERS CAN BE CREATED IN THE FOLLOWING DIVS
    // ----------------------------------------------------------------
        /* 
        let sliderDivs = `
        <div id="slider-container-death-fixed"></div>
        <div id="slider-container-death-aged"></div>`
        */
    // document.getElementById(id).innerHTML = sliderDivs;

    /* 
    CREATE Death fixed slider
    This means if productName was "death-fixed" slider2[] would be:
           [
            fixed slider HTML with death data (max, min etc), .. // slider2[0]
            "death-fixed-slider", .............................. // slider2[1]
            "death-fixed-tooltip", ............................. // slider2[2] 
            "death-fixed-text-input", .......................... // slider2[3] ––> text input
            "death-fixed-text-label" ........................... // slider2[4] ––> text input label
            "death-fixed-item-value" ........................... // slider2[5] ––> total cover item
            ]
    */
    
    // ----------------------------------------------------------------
    // INIT SLIDER - setting 'slider1' as an array
    // ----------------------------------------------------------------      
    let slider1 = sliderInit('death-fixed');
    // Add slider html to document
    document.getElementById('slider-container-death-fixed').innerHTML = slider1[0];
    // Add listeners using slider id and tooltip id
    sliderListener(slider1[1], slider1[2], slider1[3], slider1[4], slider1[5]);

    console.log(`
                \n slider1[1]: ${slider1[1]},
                \n slider1[2]: ${slider1[2]},
                \n slider1[3]: ${slider1[3]},
                \n slider1[4]: ${slider1[4]}`);
    
    // ----------------------------------------------------------------
    // SET SESSION STORAGE - FOR SLIDER
    // ----------------------------------------------------------------
    sessionStorage.setItem(slider1[1], document.getElementById(slider1[1]).value);

    // console.log('currentTotalDeathBenefit: '+currentTotalDeathBenefit);
    // ----------------------------------------------------------------
    // LISTENER - DEATH AGED SWITCH
    // ----------------------------------------------------------------

    const checkbox = document.getElementById("death-aged-switch");
    let deathAgedCoverItem = document.getElementById('death-aged-item-value');
    const deathTotalCoverItem = document.getElementById('total-death-value-item');
    let deathCurrentInnerFooter = document.getElementById('death-edit-card-footer');
    // checkbox.checked = true; // INCLUDE IF CHECKED
    updateCoverItemTotalsDeath();
    sessionStorage.setItem('death-aged', checkbox.checked);

    // // 4.1 || FILL INNER CARD FOOTER WITH CONTENT
    // // Get the reference id
    // let deathCurrentInnerFooter = document.getElementById('death-current-card-footer');
    // // Add content to that it
    // deathCurrentInnerFooter.innerHTML = deathCurrenInnerFooterContent();
    
    if (checkbox) {
        // sessionStorage.setItem('death-aged', deathDataAged.max);
        sessionStorage.setItem('death-aged', deathDataAged.benefit);
        console.log("Switch state is: " + this.checked);
        checkbox.addEventListener('change', function() {
            // console.log("Switch state is: " + this.checked);
            // Call any function here with `this.checked` as parameter
            
            if(this.checked){
                // console.log('This is checked!!!! - i can change stuff');
                deathAgedCoverItem.innerHTML = formatCurrency(deathDataAged.max, 0);
                sessionStorage.setItem('death-aged', deathDataAged.max);
                updateCoverItemTotalsDeath();
            } else {
                deathAgedCoverItem.innerHTML = formatCurrency('0',2);
                // console.log('This is checkbox false/else condition');
                sessionStorage.setItem('death-aged', '0');
                updateCoverItemTotalsDeath();
            }

        });
    }
    
    

    function updateCoverItemTotalsDeath(){
        currentFixed = document.getElementById('death-fixed-slider').value;
        currentAged = sessionStorage.getItem('death-aged');
        let totalDeath = Math.trunc(currentFixed) + Math.trunc(currentAged);
        if(totalDeath == 0){
            deathTotalCoverItem.innerHTML = formatCurrency(totalDeath,2);
        } else {
            deathTotalCoverItem.innerHTML = formatCurrency(totalDeath,0);   
        }
        
        console.log(`currentFixed: ${currentFixed}
                    \ncurrentAged: ${currentAged}`);
        deathCurrentInnerFooter.innerHTML = deathEditInnerFooterContent(currentAged, currentFixed);
        
    }

    /*
    //////////// EVENT LISTENERS FOR SLIDER & TEXT  //////////////
        These listeners trigger updates to the edit state line item totals.
        So both the slider and text input
    */

    let deathFixedSlider = document.getElementById('death-fixed-slider');
    deathFixedSlider.addEventListener('input', function () {
        updateCoverItemTotalsDeath();
        console.log('This is my new listener');
    });

    let deathFixedText = document.getElementById('death-fixed-text-input');
    deathFixedText.addEventListener('input', function () {
        updateCoverItemTotalsDeath();
        console.log('This is my new TEXT listener');
    });


    // deathEditInnerFooterContent();

    function deathEditInnerFooterContent(aged, fixed){
        // Calculate premium
        let premium = (Math.trunc(aged)*deathDataAged.premiumBase)+(Math.trunc(fixed)*deathDataFixed.premiumBase);
        // Add to session storage
        sessionStorage.setItem('death-new-premium',premium);
        newDeathPremium = premium;
        console.log("newDeathPremium: "+newDeathPremium);
        updateCartTotals();
        let content = `<div class="footer-premium">
            <div>Monthly premium: <div>
            <div>${formatCurrency(premium,2)}/mth</div>
            <div>`;
    
        return content;
    }
    


    // ----------------------------------------------------------------
    // UN-HIDE THIS FOR AN AGE_BASED SLIDER
    // ----------------------------------------------------------------
    // // CREATE Death age-based slider
    // let slider2 = sliderInit('death-age-based');
    // // add slider to the page
    // document.getElementById('slider-container-death-aged').innerHTML = slider2[0];
    // // Add listeners using slider id and tooltip id
    // sliderListener(slider2[1], slider2[2], slider2[3], slider2[4]);
    // ----------------------------------------------------------------


    // ----------------------------------------------------------------
    // REFERENCE FOR A FIXED TPD SLIDER
    // ----------------------------------------------------------------
    // // CREATE TPD flixed slider
    // let slider3 = sliderInit('tpd-fixed');
    // // add slider to the page
    // document.getElementById('slider-container-tpd-fixed').innerHTML = slider3[0];
    // // Add listeners using slider id and tooltip id
    // sliderListener(slider3[1], slider3[2], slider3[3], slider3[4]);
    // ----------------------------------------------------------------
    updateCoverItemTotalsDeath();
}
