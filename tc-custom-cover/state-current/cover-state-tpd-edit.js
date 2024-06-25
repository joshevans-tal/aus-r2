// ---------------------------------------------------------------------
// ******** CUSTOM COVER – DEATH - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    

    **  This script is called from "cover-state-tpd-current.js"
    
        First, tpdEditInner(id) is called. It is passed a reference to the 
        outer-card body with tpdEditInner(tpdBody);
    
    1.  DEATH EDIT INNER FUNC STARTS PROCESS
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
// 02  |||  CREATE DEATH INNER CARD
// ---------------------------------------------------------------------

function tpdEditInner(id){
    /// 1 || START CONTENT INSIDE OUTER CARD
    let content = '';


    // 2 || CREATE INNER CARD

    content += tcCard(
        `tpd-edit`,
        `bglight`,
        `TPD benefit:`,
        `hide`,
        `window.alert('Education content about cover types')`,
        ``
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
// CREATE DEATH INNER CONTENT
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


// ---------------------------------------------------------------------
// 04  |||  RETURN - INNER CARD CONTENT STRUCTURE
// ---------------------------------------------------------------------
function tpdEditInnerContent(){

    // ************** ADD CONTENT WHEREVER YOU WANT ***********
    // content += `I'm inside inner tpd. Yipee! Kyae! Muthaa mofo tpdDataFixed.benefit: ${tpdDataFixed.benefit}`;
    
    // document.getElementById("slider-test").innerHTML = "WHWOOHWONWWNOWKLJ";
    // Total premium calc
    let tpdPremiumCurrent = (tpdDataFixed.benefit*tpdDataFixed.premiumBase + tpdDataAged.benefit*tpdDataAged.premiumBase);
    // createTPDTPDSliders(tpdBody);
    // Content var to return
    
    content = `<div class="tc-inline-alert make-flex low-contrast">
    <p><strong>Do you want to start your Basic cover?</strong></p>
    <p class="caption">You can start Basic cover without underwriting. This will not be offered again in the future.<br></p>`;
    
    content += `
    ${createCoverItemDefault(
    "Basic TPD Cover",
    tpdDataAged.coverType,
    tpdDataAged.max,
    "Age-based changes your benefit amount with your age, while keeping your premiums more steady.")}`;
    content += tcSwitch('switch1','Don\'t include', 'Include','round','checked');

    content += `</div>`;

    content += `<br><p><strong>Add a <extra> fixed tpd cover</strong></p>`;
    content += `<div id="slider-container-tpd-fixed"></div>
                <div id="slider-container-tpd-aged"></div>`;
            

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

    // CREATE TPD fixed slider
    let slider1 = sliderInit('tpd-fixed');
    // Add slider html to document
    document.getElementById('slider-container-tpd-fixed').innerHTML = slider1[0];
    // Add listeners using slider id and tooltip id
    sliderListener(slider1[1], slider1[2], slider1[3], slider1[4]);
    console.log(`slider1[1]: ${slider1[1]},
                \n slider1[2]: ${slider1[2]},
                \n slider1[3]: ${slider1[3]},
                \n slider1[4]: ${slider1[4]}`);
    
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

}
