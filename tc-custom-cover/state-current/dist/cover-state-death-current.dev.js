"use strict";

// ---------------------------------------------------------------------
// ******** CUSTOM COVER – DEATH - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    This script is called from "cover-choice-page-structure.js"

    1. First, deathCurrentOuter(id) is called to create an OUTER card

       This function basically just creates a tcCard, adding it to the id element.
       Since this is an outer card, id will usually equal "bodyContainer" - which is a reference to the main body container 
       created with tc-page-template.js

    2. Then the "..page-structure.js" script will call deathCurrentInner(id) to create
       a nested inner card within the outer card. The id will be based on the outer card body.
       It does this within the "function initCurrentCoverInner() {...} block

    3. Finally, we build the current-cover line-items inside the inner card, again, referencing
       data from our 'scenario-config-xx.js' file.

        >   We calculate the total premium for the cover inside this to avoid scope issues, 
            referencing data from our 'scenario-config-xx.js' file.
        >   An "edit cover" button is also added. This passes outer card body ref to the 
            edit state script deathEditInner(deathBody);



    !!!! IMPORTANT !!!!
    THIS SCRIPT ASSUMES::
       
        >   The HTML page <script src="./cover-choice-page-structure.js"></script> at the bottom of the page
            or has some other way of being called. This script won't call itself. 

        >   The following scripts are imported in the HTML doc head:
                <script type="text/JAVASCRIPT" src="../includes/tc-card/tc-card.js"></script>
                <script type="text/JAVASCRIPT" src="../includes/tc-cover-item/tc-cover-item.js"></script>
                
        >   The data scenario has been loaded in the HTML doc head
                <script src="../data/scenario-config-01.js"></script>
*/
// ---------------------------------------------------------------------
// 01  |||  CREATE DEATH OUTER CARDS
// ---------------------------------------------------------------------
function deathCurrentOuter(id) {
  // tcCard(idName, headStyle, cardTitle, cardSub, subAction,action);
  id.innerHTML += tcCard("death", "default", "Death cover", "Find out more about cover types", "window.educovertypes.showModal();", "", "sldfkjdsl"); // space after the main card

  id.innerHTML += "<br>";
} // ---------------------------------------------------------------------
// CREATE DEATH INNER CONTENT
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// 02  |||  CREATE DEATH INNER CARD
// ---------------------------------------------------------------------


function deathCurrentInner(id) {
  // 1 || START CONTENT INSIDE OUTER CARD
  var content = '';
  content += "<p>If you wish to keep this existing cover, you don\u2019t need to do anything.<br><br></p>"; // 2 || CREATE INNER CARD

  content += tcCard("death-current", "bglight", "Your current Death benefit is:", "hide", "education hidden", "<button class='secondary danger btn-action' onclick=\"window.alert('Cancel this')\">Cancel</button>", 'sdlkfjdslfj'); // 3 || ADD CONTENT AFTER INNER CARD

  content += "<button class='primary btn-medium btn-full'onclick='deathEditInner(deathBody);'>Edit Death cover</button>";
  id.innerHTML = content; // 4 || FILL INNER CARD BODY WITH CONTENT
  // Get the reference id

  var deathCurrentBody = document.getElementById('death-current-card-body'); // Add content to that it

  deathCurrentBody.innerHTML += deathCurrentInnerContent(); // THIS IS THE INNER CONTENT
}
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

*** EDUCATION
var eduCoverTypes = manageCoverContentArray[2].content[0];
var tooltips = manageCoverContentArray[3].content[0];
*/
// ---------------------------------------------------------------------
// 03  |||  CREATE INNER CARD CONTENT
// ---------------------------------------------------------------------


function deathCurrentInnerContent() {
  // ************** ADD CONTENT inside the inner card ***********
  // 01 ||  CREATE VARS for PREMIUM & TO HOLD CONTENT TO RETURN
  // Total premium calc
  var deathPremiumCurrent = deathDataFixed.benefit * deathDataFixed.premiumBase + deathDataAged.benefit * deathDataAged.premiumBase; // content to return

  var content = ""; // 02 || CREATE FIXED COVER ITEM

  switch (deathDataFixed.benefit) {
    case "placeholder for future cases":
      // ENSURE NUMBERS EXIST - it's needed for the premium calc;
      break;

    default:
      // Cover item will format nums and display "no cover" if benefit = 0
      content += "\n        ".concat(createCoverItemDefault("Death Cover", deathDataFixed.coverType, deathDataFixed.benefit, tooltips["fixed"]));
  } // 03 || CREATE AGE-BASED COVER ITEM


  switch (deathDataAged.benefit) {
    case "placeholder for future cases":
      // ENSURE NUMBERS EXIST - it's needed for the premium calc;
      break;

    default:
      // Cover item will format nums and display "no cover" if benefit = 0
      content += "\n            ".concat(createCoverItemDefault("Death Cover", deathDataAged.coverType, deathDataAged.benefit, tooltips["age-based"]));
  } // 04 || CREATE TOTAL PREMIUM LINE ITEM FOR THESE COVERS


  content += "".concat(createCoverItemTotal("Monthly Premium", deathPremiumCurrent, "/mth")); // 05 || SEND BACK THE CONTENT

  return content;
}