"use strict";

// ---------------------------------------------------------------------
// ******** CUSTOM COVER – TPD - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    This script is called from "cover-choice-page-structure.js"

    1. First, tpdCurrentOuter(id) is called to create an OUTER card

       This function basically just creates a tcCard, adding it to the id element.
       id will usually equal "bodyContainer" - which is a reference to the main body container 
       created with tc-page-template.js

    2. Then the page structure will call tpdCurrentInner(id) to create
       a nested inner card within the outer card. 

    3. We then calculate the total premium for the cover, referencing data from our 'scenario-config-xx.js' file.

    4. Finally, we build the cover line items inside the inner card, again, referencing
       data from our 'scenario-config-xx.js' file.

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
// 01  |||  CREATE TPD OUTER CARDS
// ---------------------------------------------------------------------
function tpdCurrentOuterCard(id) {
  // tcCard(idName, headStyle, cardTitle, cardSub, subAction,action);
  id.innerHTML += tcCard("tpd", "default", "TPD cover", "Find out more about cover types", "window.educovertypes.showModal();", ""); // space after the main card

  id.innerHTML += "<br>";
} // ---------------------------------------------------------------------
// CREATE TPD INNER CONTENT
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// 02  |||  CREATE TPD INNER CARD
// ---------------------------------------------------------------------


function tpdCurrentInner(id) {
  // 1 || START CONTENT INSIDE OUTER CARD
  var content = '';
  content += "<p>If you wish to keep this existing cover, you don\u2019t need to do anything.<br><br></p>"; // 2 || CREATE INNER CARD

  content += tcCard("tpd-current", "bglight", "Your current TPD benefit is:", "hide", "hidden education", "<button class='secondary danger btn-action' onclick=\"window.alert('Cancel this')\">Cancel</button>"); // 3 || ADD CONTENT AFTER INNER CARD

  content += "<button class='primary btn-medium btn-full'onclick='tpdEditInner(tpdBody);'>Edit TPD cover</button>";
  id.innerHTML = content; // 4 || FILL INNER CARD BODY WITH CONTENT
  // Get the reference id

  var tpdCurrentBody = document.getElementById('tpd-current-card-body'); // Add content to that it

  tpdCurrentBody.innerHTML += tpdCurrentInnerContent(); // THIS IS THE INNER CONTENT
}
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
// 03  |||  CREATE INNER CARD CONTENT
// ---------------------------------------------------------------------


function tpdCurrentInnerContent() {
  // ************** ADD CONTENT inside the inner card ***********
  // 01 ||  CREATE VARS for PREMIUM & TO HOLD CONTENT TO RETURN
  // Total premium calc
  var tpdPremiumCurrent = tpdDataFixed.benefit * tpdDataFixed.premiumBase + tpdDataAged.benefit * tpdDataAged.premiumBase; // content to return

  var content = ""; // 02 || CREATE FIXED COVER ITEM

  switch (tpdDataFixed.benefit) {
    case "placeholder for future cases":
      // ENSURE NUMBERS EXIST - it's needed for the premium calc;
      break;

    default:
      // Cover item will format nums and display "no cover" if benefit = 0
      content += "\n        ".concat(createCoverItemDefault("TPD Cover", tpdDataFixed.coverType, tpdDataFixed.benefit, tooltips["fixed"]));
  } // 03 || CREATE AGE-BASED COVER ITEM


  switch (tpdDataAged.benefit) {
    case "placeholder for future cases":
      // ENSURE NUMBERS EXIST - it's needed for the premium calc;
      break;

    default:
      // Cover item will format nums and display "no cover" if benefit = 0
      content += "\n            ".concat(createCoverItemDefault("TPD Cover", tpdDataAged.coverType, tpdDataAged.benefit, tooltips["age-based"]));
  } // 04 || CREATE TOTAL PREMIUM LINE ITEM FOR THESE COVERS


  content += "".concat(createCoverItemTotal("Monthly Premium", tpdPremiumCurrent, "/mth")); // 05 || SEND BACK THE CONTENT

  return content;
}