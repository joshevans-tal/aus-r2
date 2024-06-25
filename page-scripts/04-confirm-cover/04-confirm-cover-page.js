/*
// -----------------------------------------------------------------------------------------------------------------
//  04 || CONFIRM COVER - by Josh Evans
// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------
// HOW DOES IT WORK?
// -----------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------
00 || This is a page building script. ###
--------------------------------------------------------------------

The script adds elements to the DOM, building out the page content and features.
Like the rest of the app - this is written in vanilla js without modules

This script assumes
    1.   The page that calls it is using my page template script, so the div id="content-container" exists
    2.   The appropriate component and data scripts have been loaded into the head of the html doc
    3.   This also uses SESSION STORAGE DATA to display 'new cover'. It assumes this has been
         created in a previous cover-select page.

REQUIRES:
    * tc-page-template
    * tcModal
    * tcCard
    * tc-cover-item
    * tcCta
    * utilities
    * tcTooltip    
    * manage-copy-01
    * scenario-config-xx

*/

// -----------------------------------------------------------------------------------------------------------------
// CREATE PAGE CONTENT STRUCTURE
// -----------------------------------------------------------------------------------------------------------------

// BODY CONTAINER IS id="content-container"
let bodyContainer = document.getElementById("content-container");
// document.body.innerHTML += tcModal(dorcContent["title"], dorcContent["content"], dorcContent["modal footer"],dorcContent["id"]);
//  MAIN Content
let mainContent = ``;

mainContent += `<h5 style="margin-top:0">You have requested the following cover change:</h5>`;
mainContent += createAccountDetails(bodyContainer);

// -------------------------------
// MAIN CARD - CURRENT COVER
// -------------------------------
// tcCard(idName, headStyle, cardTitle, cardSub, subAction,action)
mainContent += tcModal(eduCoverTypes["title"], eduCoverTypes["content"], eduCoverTypes["modal footer"],eduCoverTypes["id"]);

mainContent += tcCard(
    `current-cover`,
    `default`,
    `Your current cover:`,
    `Learn more about insurance cover`,
    `window.educovertypes.showModal();`,
    ``,
    `initialise`
);

// ---------------   V   --  ARROW DIVIDER  ------------------------------
mainContent += addSpace('small');

mainContent += `<div class='arrow-divider'><img src='images/icons/ic-arrow-down.svg' height='40px' /></div>`;

mainContent += addSpace('large');

// -------------------------------
// MAIN CARD - NEW COVER
// -------------------------------
// tcCard(idName, headStyle, cardTitle, cardSub, subAction,action)

mainContent += tcCard(
    `new-cover`,
    `default`,
    `Your NEW cover:`,
    `Learn more about insurance cover`,
    `window.educovertypes.showModal();`,
    ``,
    `initialise`
);








// -------------------------------
// SET UP LIST CONTAINTER ---> build list after this exists in the page (after mainContent is added with innerHTML)
// -------------------------------
// mainContent += `<h3 class="">Adjust your cover in 3 steps</h3>`;
// mainContent += `<div id="expectation-list"></div>`;
mainContent += addSpace('medium');
// -------------------------------
// CTAS
// -------------------------------
mainContent += tcModal(dorcContent["title"], dorcContent["content"], dorcContent["modal footer"],dorcContent["id"]);

mainContent += tcCTA(
    // Set cta layout DEFAULT should be 'fullwidth' - any other value will collaps the buttons
    'fullwidth',
    // Define 2D array of buttons
    [
        [
            'primary',
            'large',
            'Confirm & continue',
            `window.location = "05-health-rcq.html";`
        ],
        [
            'tertiary',
            'large',
            'Cancel & exit',
            `window.alert("This would exit to your insurance dashboard");`
        ]
    ]

);

mainContent += addSpace('small');
// -------------------------------
//  ADD MAIN CONTENT STRUCTURE - TO HTML PAGE
// -------------------------------
bodyContainer.innerHTML = mainContent;



/*
_________________________________________________________
                    CURRENT COVER
        \\\\\\\\\     FUNCTIONS     ////////////
            \\\\\\        ||       //////
             \\\\\\       ||      //////
             ___________________________

// -----------------------------------------------------------------------------------------------------------------
// ADD THINGS INTO THE BUILT HTML STRUCTURE
// -----------------------------------------------------------------------------------------------------------------

*/ 

let newDeathFixed = sessionStorage.getItem('death-fixed-slider');
let newDeathAged = sessionStorage.getItem('death-aged');
let newTPDFixed = sessionStorage.getItem('tpd-fixed-slider');
let newTPDAged = sessionStorage.getItem('tpd-aged');
console.log(
    'Session storage death-fixed-slider: '+newDeathFixed 
    +'\nSession storage tpd-fixed-slider: '+newTPDFixed);

// -----------------------------------------------------------------------------------------------------------------
// FIND CARD BODY
// -----------------------------------------------------------------------------------------------------------------
let currentCardBody = document.getElementById('current-cover-card-body');

// -----------------------------------------------------------------------------------------------------------------
// CURRENT :: COVER PANEL >>>> START
// -----------------------------------------------------------------------------------------------------------------
let currentCoverContent = `<br><div class="accordion-container">`;

// -------------------------------------------------------------------------------------------
// 01 ||  CURRENT :: ACCORDION CONTENT - 
// -------------------------------------------------------------------------------------------
//________________________________________________
// 01.1  ||  CURRENT :: ACCORDION :: DEATH
// ```````````````````````````````````````````````

let deathPremium = (deathDataAged.benefit * deathDataAged.premiumBase) + (deathDataFixed.benefit * deathDataFixed.premiumBase);
// Accordion Button
let deathBtn = `<span class="tc-accordion-label">Death Cover</span>
                <span class="cover-sum">
                ${formatCurrency(deathDataFixed.benefit + deathDataAged.benefit)}
                </span></span>`;
// Accordion content
// let deathFixed = createCoverItemDefault('deathDataFixed', 'coverType', deathDataFixed.benefit, 'dictionary');
currentCoverContent += tcAccordion(
    `${deathBtn}`,
    `
    ${createCoverItemSub('', deathDataAged.coverType, deathDataAged.benefit, tooltips['age-based'])}
     ${createCoverItemSub('', deathDataFixed.coverType, deathDataFixed.benefit, tooltips['fixed'])}
     `
);
// <img src="./images/icons/ic-plus.svg" style="height: 24px;">

//________________________________________________
// 01.2  ||  CURRENT :: ACCORDION :: TPD
// ```````````````````````````````````````````````

let tpdPremium = (tpdDataAged.benefit * tpdDataAged.premiumBase) + (tpdDataFixed.benefit * tpdDataFixed.premiumBase);
// Accordion Button
let tpdBtn = `<span class="tc-accordion-label">TPD Cover</span>
                <span class="cover-sum">
                ${formatCurrency(tpdDataFixed.benefit + tpdDataAged.benefit)}
                </span></span>`;
// Accordion content
// let deathFixed = createCoverItemDefault('deathDataFixed', 'coverType', deathDataFixed.benefit, 'dictionary');
currentCoverContent += tcAccordion(
    `${tpdBtn}`,
    `${createCoverItemSub('', tpdDataAged.coverType, tpdDataAged.benefit, tooltips['age-based'])}
     ${createCoverItemSub('', tpdDataFixed.coverType, tpdDataFixed.benefit, tooltips['fixed'])}`
);

//________________________________________________
// 01.3  ||  CURRENT :: ACCORDION :: IP
// ```````````````````````````````````````````````

// Accordion Button
let ipBtn = `<span class="tc-accordion-label">Income Protection</span>
                <span class="cover-sum">
                ${formatCurrency(ipData.benefit)}
                </span></span>`;
// Accordion content
// let deathFixed = createCoverItemDefault('deathDataFixed', 'coverType', deathDataFixed.benefit, 'dictionary');
currentCoverContent += tcAccordion(
    `${ipBtn}`,
    `${createCoverItemSub('', ipData.coverType, ipData.benefit, tooltips['age-based'])}
     ${createCoverItemSubText('', 'Waiting period', ipData["Waiting period"], tooltips['waiting period'])}
     ${createCoverItemSubText('', 'Benefit period', ipData["Benefit period"] , tooltips['benefit period'])}
     ${createCoverItemSubText('', 'Occupation category', ipData["Occupation category"], tooltips['occupation category'])}`
);
let ipPremium = ipData.benefit * ipData.premiumBase;

//________________________________________________
// 01.4  ||  CURRENT :: ACCORDION :: TOTAL PREMIUM
// ```````````````````````````````````````````````
// currentCoverContent += createCoverItemTotal('Total premium', deathPremium + tpdPremium + ipPremium, '/mth');


// -----------------------------------------------------------------------------------------------------------------
// CURRENT COVER PANEL !!!!!!!--->>>> END
// -----------------------------------------------------------------------------------------------------------------
currentCoverContent += `</div><br>`;

currentCardBody.innerHTML = currentCoverContent;

document.getElementById('current-cover-card-footer').innerHTML = `<div class="footer-premium themeColorTextDark"><strong>
    <div>Total Monthly premium: <div>
    <div>${formatCurrency((deathPremium + tpdPremium + ipPremium),2)}/mth</strong></div>
    <div>`;

// -----------------------------------------------------------------------------------------------------------------
// SET UP LISTENERS FOR ALL THE CREATED ACCORDIONS
// -----------------------------------------------------------------------------------------------------------------

// Accordion listeners
addAccordionListener();
// _________________________________________________________________________________________________________________
// ``````````````````````````````````````````````````````````




/*
_________________________________________________________
                      NEW COVER
        \\\\\\\\\     FUNCTIONS     ////////////
            \\\\\\        ||       //////
             \\\\\\       ||      //////
             ___________________________

// -----------------------------------------------------------------------------------------------------------------
// ADD THINGS INTO THE BUILT HTML STRUCTURE
// -----------------------------------------------------------------------------------------------------------------

*/ 



// -----------------------------------------------------------------------------------------------------------------
// FIND NEWCARD BODY
// -----------------------------------------------------------------------------------------------------------------
let newCardBody = document.getElementById('new-cover-card-body');

// -----------------------------------------------------------------------------------------------------------------
// NEW :: COVER PANEL >>>> START
// -----------------------------------------------------------------------------------------------------------------
let newCoverContent = ``;
// let newCoverContent = `<div class="accordion-container">NEW COVER?</div>`; USE FOR ROUNDED CONTAINER

newCoverContent += newCoverItems();

newCardBody.innerHTML += newCoverContent;

/*

      \\\\\\\\\\\\\   EXPECTATIONS LIST  ////////////////////

*/

// // -----------------------------------------------------------------------------------------------------------------
// // 02  ||  WHAT TO EXPECT - CREATE LIST
// // -----------------------------------------------------------------------------------------------------------------
// createList(
//     // Write list as array
//     [
//         "First, confirm some basic personal and emplyment information.",
//         "Next, discover cover options.",
//         "Find cover you like? Answer some health questions to apply."
//     ],
//     // identify container div id
//     "expectation-list"
// );



// -----------------------------------------------------------------------------------------------------------------
// NEW COVER ITEMS!
// -----------------------------------------------------------------------------------------------------------------
/* Access the insuranceProducts array within currentCover
var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var tpdDataAged = insuranceProductsArray[1].coverages[1];
var ipData = insuranceProductsArray[2].coverages[0];
*/
function newCoverItems(){

    // -----------------------------------------------------------------------------------------------------------------
    // NEW COVER ITEMS :: DEATH
    // -----------------------------------------------------------------------------------------------------------------


    let content = `<h5 class="new-cover-status-title">Death Cover 
        ${tcTag(`Increased`,`increased`)}</h5>`;
        //  Accepted style values include: 'increased', 'decreased' & 'no-change'

    if(newDeathAged){
        content += `${createCoverItemSub('', deathDataAged.coverType, newDeathAged, tooltips['age-based'])}`
    } else {
        content += `${createCoverItemSub('', deathDataAged.coverType, deathDataAged['new benefit'], tooltips['age-based'])}`
    }
    
    // sessionStorage.getItem('death-fixed')
    if(newDeathFixed){
        content += `${createCoverItemSub('', deathDataFixed.coverType, newDeathFixed, tooltips['fixed'])}`;
    } else {
        content += `${createCoverItemSub('', deathDataFixed.coverType, deathDataFixed['new benefit'], tooltips['fixed'])}`;
    }
    



    // -----------------------------------------------------------------------------------------------------------------
    // NEW COVER ITEMS :: TPD
    // -----------------------------------------------------------------------------------------------------------------

    content += `<h5 class="new-cover-status-title">TPD Cover 
        ${tcTag(`Increased`,`increased`)}</h5>`;
        //  Accepted style values include: 'increased', 'decreased' & 'no-change'

    

    if(newTPDAged){
        content += `${createCoverItemSub('', tpdDataAged.coverType, newTPDAged, tooltips['age-based'])}`;
    } else {
        content += `${createCoverItemSub('', tpdDataAged.coverType, tpdDataAged['new benefit'], tooltips['age-based'])}`;
    }

    if(newTPDFixed){
        content += `${createCoverItemSub('', tpdDataFixed.coverType, newTPDFixed, tooltips['fixed'])}`;
    } else {
        content += `${createCoverItemSub('', tpdDataFixed.coverType, tpdDataFixed['new benefit'], tooltips['fixed'])}`;
    }
    



    // -----------------------------------------------------------------------------------------------------------------
    // NEW COVER ITEMS :: IP
    // -----------------------------------------------------------------------------------------------------------------

    content += `<h5 class="new-cover-status-title">Income Protection 
        ${tcTag(`Increased`,`increased`)}</h5>`;
        //  Accepted style values include: 'increased', 'decreased' & 'no-change'

    content += `${createCoverItemSub('', ipData.coverType, ipData['new benefit'], tooltips['age-based'])}
                ${createCoverItemSubText('', 'Waiting period', ipData["Waiting period"], tooltips['waiting period'])}
                ${createCoverItemSubText('', 'Benefit period', ipData["Benefit period"] , tooltips['benefit period'])}
                ${createCoverItemSubText('', 'Occupation category', ipData["Occupation category"], tooltips['occupation category'])}`;


    // -----------------------------------------------------------------------------------------------------------------
    // NEW COVER ITEMS :: EDIT MY COVER BUTTON
    // -----------------------------------------------------------------------------------------------------------------

    content += `<div class="ctas"><button class='secondary btn-large btn-width-auto' onclick='window.location.href = "03-cover-select.html";' aria-label="url">Edit my cover choice</button><div>`;

    document.getElementById('new-cover-card-footer').innerHTML = `<div class="footer-premium themeColorTextDark"><strong>
    <div>Total Monthly premium: <div>
    <div>${formatCurrency(sessionStorage.getItem('new-total-premium'),2)}/mth</strong></div>
    <div>`;

    return content;
    
}

