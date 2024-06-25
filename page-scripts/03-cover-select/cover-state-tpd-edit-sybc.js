// ---------------------------------------------------------------------
// ******** CUSTOM COVER – TPD - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    

    **  This script is called from "cover-state-tpd-current.js"
    
        First, tpdEditInner(id) is called. It is passed a reference to the 
        outer-card body with tpdEditInner(tpdBody);
    
    1.  TPD EDIT INNER FUNC STARTS PROCESS
        > Is NOT a return func – it creates directly into the given id using innerHTML
        
    FIRST : MAIN Structure
        1.1 | It sets up the 'content' var
        1.2 | It creates an inner card with no education or action
                - This creates an inner card id 'tpd-edit-card-body'
        1.3 | Create a 'reset' btn, which calls tpd current cover, 
              sending back the given outer card id with tpdCurrentInner(tpdBody);
    SECOND : INNER STRUCTURE
        1.4 | It then creates a var to hold inner-card body id: 'tpdEditBody'
        1.5 | The inner-card body is populated first with innerHTML = tpdEditInnerContent();
                > This is a return function
                > It returns html structure including:
                    - Age-based switch on/off pattern
                    - Fixed slider containers with hard coded ids
    THIRD : EDIT FUNCTIONS ARE BUILT
        1.6 | Once the html content structure is in place, the sliders are added
              using a function call 'createTPDSliders();'
        1.7 | Create-slider function is a hard coded slider call. It is:
                > specific to tpd right now
                > knows the specific ids add for the tpd slider
                > Initiates a slider using a specific product name
                    eg. let slider1 = sliderInit('tpd-fixed');

       

    !!!! IMPORTANT !!!!
    THIS SCRIPT ASSUMES::
       
        >   The HTML page <script src="./cover-choice-page-structure.js"></script> at the bottom of the page
            or has some other way of being called. This script won't call itself. 


*/


// ---------------------------------------------------------------------
// 02  |||  CREATE TPD INNER CARD
// ---------------------------------------------------------------------

function tpdEditInner(id){
    /// 1 || START CONTENT INSIDE OUTER CARD
    let content = '';

    content += `<div class="space v-medium"></div>`;


    // 2 || CREATE INNER CARD

    content += tcCard(
        `tpd-edit`,
        `bglight`,
        `Edit your TPD cover`,
        `hide`,
        `window.alert('Education content about cover types')`,
        ``,
        `Initialise`
        );
    
    // 3 || ADD CONTENT AFTER INNER CARD
    content += `<button class='secondary btn-medium btn-full'onclick='tpdCurrentInner(tpdBody);'>Reset TPD cover</button>`
    id.innerHTML = content;
    
    let tpdEditBody = document.getElementById('tpd-edit-card-body');

    tpdEditBody.innerHTML += tpdEditInnerContent(); // THIS IS THE INNER CONTENT
        // tpdEditInnerContent();
        createTPDSliders();
}



// ---------------------------------------------------------------------
// CREATE TPD INNER CONTENT
// ---------------------------------------------------------------------

/*

*********************************************
//   DATA SET UP - used by all pages
*********************************************
// Access the insuranceProducts array within currentCover

var insuranceProductsArray = currentCover.insuranceProducts;
var tpdDataFixed = insuranceProductsArray[0].coverages[0];
var tpdDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var tpdDataAged = insuranceProductsArray[1].coverages[1];
var ipData = insuranceProductsArray[2].coverages[0];
let sData = tpdDataFixed;
let sProduct = insuranceProductsArray[0].product;

*/

// ---------------------------------------------------------------------
// 03  |||  CALCULATE TOTAL PREMIUM - TO DO!!!!
// ---------------------------------------------------------------------
function tpdTotalPremium(coverArray){
    
    let totalPremium = '';
    for(i=0; i<coverArray.length; i++){
        totalPremium += coverArray[i];
    }
    
    return totalPremium;
}

// TOTAL BENEFIT
let currentTotalTPDBenefit = updateTotalBenefit([tpdDataAged.max,tpdDataFixed.benefit]);
console.log('currentTotalTPDBenefit: '+currentTotalTPDBenefit);

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
function tpdEditInnerContent(){

    // ************** ADD CONTENT WHEREVER YOU WANT ***********
    // content += `I'm inside inner tpd. Yipee! tpdDataFixed.benefit: ${tpdDataFixed.benefit}`;
    
    // document.getElementById("slider-test").innerHTML = "WHWOOHWONWWNOWKLJ";
    // Total premium calc
    let tpdPremiumCurrent = (tpdDataFixed.benefit*tpdDataFixed.premiumBase + tpdDataAged.benefit*tpdDataAged.premiumBase);
    // createTPDTPDSliders(tpdBody);
    // Content var to return
    
    content = `<p class="" style="margin-top: 8px;">Use the functions below to select the cover that fits your goals. Any increases you make to your cover may require underwriting.<br></p>`;

    content += `<div class="tc-inline-alert make-flex column low-contrast">`;
    
    content += `
    ${createCoverItemDefault(
    "Basic TPD Cover",
    tpdDataAged.coverType,
    tpdDataAged.max,
    "Age-based changes your benefit amount with your age, while keeping your premiums more steady.",
    'basic-tpd-aged')}`;
    // content += tcSwitch('tpd-aged-switch','Don\'t include', 'Include','round','');
    content += tcSwitch('tpd-aged-switch','Remove', 'Keep','round','checked');

    // content += `<p class="caption" style="margin: 8px 16px;"><strong>Note:</strong> Basic Cover is only available when joining. It will not be offered again if it is removed.<br></p>`;
    
    content += `</div>`;

    content += `<br><p style="margin-top: 16px;"><strong>Add a <extra> fixed tpd cover</strong></p>`;
    // content += `<p class="caption">Unlike Basic Cover, adding extra fixed cover will require underwriting.<br></p>`
    content += `<div id="slider-container-tpd-fixed"></div>
                <div id="slider-container-tpd-aged"></div>
                <br>`;
    
    // Cover items at bottom of card
    content += `<div class="accordion-container" style="margin-bottom: 8px;" >`;
    content += `${createCoverItemDefault(
        "TPD cover",
        'Age-based',
        tpdDataAged.benefit, // set to tpdDataAged.max when basic cover is default checked
        tpdDataAged.education,
        'tpd-aged')}`;

    content += `${createCoverItemDefault(
        "TPD cover",
        tpdDataFixed.coverType,
        tpdDataFixed.benefit,
        tpdDataFixed.education,
        'tpd-fixed')}`;
    
    content += `${createCoverItemTotal('Total TPD:', currentTotalTPDBenefit, '','total-tpd-value-item')}
        `
    // content += `<div id="tpd-total-premium" class="total-premium">This is the total premium: ${tpdPremiumCurrent}</div>`;

    content += `</div>`;

    return content;
    
}




// ---------------------------------------------------------------------
// 05  |||  CREATE SLIDERS
// ---------------------------------------------------------------------

function createTPDSliders(id){
    // ----------------------------------------------------------------
    // SLIDERS CAN BE CREATED IN THE FOLLOWING DIVS
    // ----------------------------------------------------------------
        /* 
        let sliderDivs = `
        <div id="slider-container-tpd-fixed"></div>
        <div id="slider-container-tpd-aged"></div>`
        */
    // document.getElementById(id).innerHTML = sliderDivs;

    /* 
    CREATE TPD fixed slider
    This means if productName was "tpd-fixed" slider2[] would be:
           [
            fixed slider HTML with tpd data (max, min etc), .. // slider2[0]
            "tpd-fixed-slider", .............................. // slider2[1]
            "tpd-fixed-tooltip", ............................. // slider2[2] 
            "tpd-fixed-text-input", .......................... // slider2[3] ––> text input
            "tpd-fixed-text-label" ........................... // slider2[4] ––> text input label
            "tpd-fixed-item-value" ........................... // slider2[5] ––> total cover item
            ]
    */
    
    // ----------------------------------------------------------------
    // INIT SLIDER - setting 'slider1' as an array
    // ----------------------------------------------------------------      
    let slider1 = sliderInit('tpd-fixed');
    // Add slider html to document
    document.getElementById('slider-container-tpd-fixed').innerHTML = slider1[0];
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

    // console.log('currentTotalTPDBenefit: '+currentTotalTPDBenefit);
    // ----------------------------------------------------------------
    // LISTENER - TPD AGED SWITCH
    // ----------------------------------------------------------------

    const checkbox = document.getElementById("tpd-aged-switch");
    let tpdAgedCoverItem = document.getElementById('tpd-aged-item-value');
    const tpdTotalCoverItem = document.getElementById('total-tpd-value-item');
    let tpdCurrentInnerFooter = document.getElementById('tpd-edit-card-footer');
    // checkbox.checked = true; // INCLUDE IF CHECKED
    updateCoverItemTotalsTPD();
    sessionStorage.setItem('tpd-aged', checkbox.checked);

    // // 4.1 || FILL INNER CARD FOOTER WITH CONTENT
    // // Get the reference id
    // let tpdCurrentInnerFooter = document.getElementById('tpd-current-card-footer');
    // // Add content to that it
    // tpdCurrentInnerFooter.innerHTML = tpdCurrenInnerFooterContent();
    
    if (checkbox) {
        // sessionStorage.setItem('tpd-aged', tpdDataAged.max);
        sessionStorage.setItem('tpd-aged', tpdDataAged.benefit);
        console.log("Switch state is: " + this.checked);
        checkbox.addEventListener('change', function() {
            // console.log("Switch state is: " + this.checked);
            // Call any function here with `this.checked` as parameter
            
            if(this.checked){
                // console.log('This is checked!!!! - i can change stuff');
                tpdAgedCoverItem.innerHTML = formatCurrency(tpdDataAged.max, 0);
                sessionStorage.setItem('tpd-aged', tpdDataAged.max);
                updateCoverItemTotalsTPD();
            } else {
                tpdAgedCoverItem.innerHTML = formatCurrency('0',2);
                // console.log('This is checkbox false/else condition');
                sessionStorage.setItem('tpd-aged', '0');
                updateCoverItemTotalsTPD();
            }

        });
    }
    
    

    function updateCoverItemTotalsTPD(){
        currentFixed = document.getElementById('tpd-fixed-slider').value;
        currentAged = sessionStorage.getItem('tpd-aged');
        let totalTPD = Math.trunc(currentFixed) + Math.trunc(currentAged);
        if(totalTPD == 0){
            tpdTotalCoverItem.innerHTML = formatCurrency(totalTPD,2);
        } else {
            tpdTotalCoverItem.innerHTML = formatCurrency(totalTPD,0);   
        }
        
        console.log(`currentFixed: ${currentFixed}
                    \ncurrentAged: ${currentAged}`);
        tpdCurrentInnerFooter.innerHTML = tpdEditInnerFooterContent(currentAged, currentFixed);
        
    }

    /*
    //////////// EVENT LISTENERS FOR SLIDER & TEXT  //////////////
        These listeners trigger updates to the edit state line item totals.
        So both the slider and text input
    */

    let tpdFixedSlider = document.getElementById('tpd-fixed-slider');
    tpdFixedSlider.addEventListener('input', function () {
        updateCoverItemTotalsTPD();
        console.log('This is my new listener');
    });

    let tpdFixedText = document.getElementById('tpd-fixed-text-input');
    tpdFixedText.addEventListener('input', function () {
        updateCoverItemTotalsTPD();
        console.log('This is my new TEXT listener');
    });


    // tpdEditInnerFooterContent();

    function tpdEditInnerFooterContent(aged, fixed){
        // Calculate premium
        let premium = (Math.trunc(aged)*tpdDataAged.premiumBase)+(Math.trunc(fixed)*tpdDataFixed.premiumBase);
        // Add to session storage
        sessionStorage.setItem('tpd-new-premium',premium);
        newTPDPremium = premium;
        console.log("newTPDPremium: "+newTPDPremium);
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
    // // CREATE TPD age-based slider
    // let slider2 = sliderInit('tpd-age-based');
    // // add slider to the page
    // document.getElementById('slider-container-tpd-aged').innerHTML = slider2[0];
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
    updateCoverItemTotalsTPD();
}
