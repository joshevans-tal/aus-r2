/*
// -----------------------------------------------------------------------------------------------------------------
//  WARM WELCOME PAGE - by Josh Evans
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

REQUIRES:
    * tc-page-template
    * tcModal
    * tcCard
    * utilities
    * tcTooltip    
    * manage-copy-01  // NOTE: DoRC and next page link is found here
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

mainContent += `<p>The following pages will help you start or manage your cover. You'll be able to select which insurance cover types you want, adjust options and choose your benefit amounts.</p>
<div class="v-xlarge"></div>`; //  

mainContent += createAccountDetails(bodyContainer);

// -------------------------------
// MAIN CARD
// -------------------------------
// tcCard(idName, headStyle, cardTitle, cardSub, subAction,action)
mainContent += tcModal(eduCoverTypes["title"], eduCoverTypes["content"], eduCoverTypes["modal footer"],eduCoverTypes["id"]);

mainContent += tcCard(
    `current-cover`,
    `default`,
    `Your current cover:`,
    `Learn more about insurance cover`,
    `window.educovertypes.showModal();`,
    ``
);

mainContent += addSpace('small');
// -------------------------------
// SET UP LIST CONTAINTER ---> build list after this exists in the page (after mainContent is added with innerHTML)
// -------------------------------
mainContent += `<h4 class="">What to expect:</h4>`;
mainContent += `<div id="expectation-list"></div>`;
mainContent += addSpace('xlarge');
mainContent += `Note: You'll be able to start your Basic Cover without answering health questions.<br>
                If you would like additional cover, some questions will be asked with your application.`;
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
            'Get started',
            `window.dialogdorc.showModal();`
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
// ---------------------------------------------------
//  ADD MAIN CONTENT STRUCTURE - TO HTML PAGE
// ---------------------------------------------------
bodyContainer.innerHTML += mainContent;


// -----------------------------------------------------------------------------------------------------------------
// ADD THINGS INTO THE BUILT HTML STRUCTURE
// -----------------------------------------------------------------------------------------------------------------

/*

*********************************************
//   DATA SET UP - used by all pages
*********************************************
// Access the insuranceProducts array within currentCover

*** COVER
var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var tpdDataAged = insuranceProductsArray[1].coverages[1];
var ipData = insuranceProductsArray[2].coverages[0];
let sData = deathDataFixed;
let sProduct = insuranceProductsArray[0].product;

*** EDUCATION
var eduCoverTypes = manageCoverContentArray[2].content[0];
var tooltips = manageCoverContentArray[3].content[0];
*/

// -----------------------------------------------------------------------------------------------------------------
// FIND CARD BODY
// -----------------------------------------------------------------------------------------------------------------
let cardBody = document.getElementById('current-cover-card-body');

// -----------------------------------------------------------------------------------------------------------------
// CURRENT COVER PANEL >>>> START
// -----------------------------------------------------------------------------------------------------------------
let currentCoverContent = `<div class="accordion-container">`;

// -------------------------------------------------------------------------------------------
// 01 ||  ACCORDION CONTENT
// -------------------------------------------------------------------------------------------
//________________________________________________
// 01.1  ||  ACCORDION :: DEATH
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
    `${deathBtn}`,`
    ${createCoverItemSub('', deathDataAged.coverType, deathDataAged.benefit, tooltips['age-based'])}
     ${createCoverItemSub('', deathDataFixed.coverType, deathDataFixed.benefit, tooltips['fixed'])}
     `
);
// <img src="./images/icons/ic-plus.svg" style="height: 24px;">

//________________________________________________
// 01.2  ||  ACCORDION :: TPD
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
// 01.3  ||  ACCORDION :: IP
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
// 01.4  ||  ACCORDION :: TOTAL PREMIUM
// ```````````````````````````````````````````````
currentCoverContent += createCoverItemTotal('Total premium', deathPremium + tpdPremium + ipPremium, '/mth');


// -----------------------------------------------------------------------------------------------------------------
// CURRENT COVER PANEL !!!!!!!--->>>> END
// -----------------------------------------------------------------------------------------------------------------
currentCoverContent += `</div>`;

cardBody.innerHTML = currentCoverContent;

// -----------------------------------------------------------------------------------------------------------------
// SET UP LISTENERS FOR ALL THE CREATED ACCORDIONS
// -----------------------------------------------------------------------------------------------------------------

// Accordion listeners
addAccordionListener();
// _________________________________________________________________________________________________________________
// ``````````````````````````````````````````````````````````


// -----------------------------------------------------------------------------------------------------------------
// 02  ||  WHAT TO EXPECT - CREATE LIST
// -----------------------------------------------------------------------------------------------------------------
createList(
    // Write list as array
    [
        "First, you'll confirm some basic work information.",
        "We'll then be able to show you the cover options available to you.",
        `If you find cover you like, you can take the next step and apply for cover.`
    ],
    // identify container div id
    "expectation-list"
);