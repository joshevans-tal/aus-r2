"use strict";

// ---------------------------------------------------------------------
// ******** CUSTOM COVER – IPH - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    This script is called from "cover-choice-page-structure.js"

    1. First, deathCurrentOuter(id) is called to create an OUTER card

       This function basically just creates a tcCard, adding it to the id element.
       id will usually equal "bodyContainer" - which is a reference to the main body container 
       created with tc-page-template.js

    2. Then the page structure will call deathCurrentInner(id) to create
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
// 01  |||  CREATE IP OUTER CARDS
// ---------------------------------------------------------------------
function ipCurrentOuterCard(id) {
  // tcCard(idName, headStyle, cardTitle, cardSub, subAction,action);
  id.innerHTML += tcCard("ip", "default", "Income Protection", "Find out more about cover types", "window.educovertypes.showModal();", ""); // space after the main card
  // id.innerHTML += `<br>`;
} // ---------------------------------------------------------------------
// 02  |||  CREATE IP INNER CARD
// ---------------------------------------------------------------------


function ipCurrentInnerCard(id) {
  // 1 || START CONTENT INSIDE OUTER CARD
  var content = '';
  content += "<p>If you wish to keep this existing cover, you don\u2019t need to do anything.<br><br></p>"; //  INNER CARD

  content += tcCard("ip-current", "bglight", "Your current IP benefit is:", "hide", "hidden education", "<button class='secondary btn-action danger' onclick=\"window.alert('Cancel this')\">Cancel IP</button>"); // 3 || ADD CONTENT AFTER INNER CARD
  // content += `<button class='primary btn-medium btn-full'onclick='ipEditInner(ipBody);'>Edit IP cover</button>`;

  content += "<button class='primary btn-medium btn-full' onclick=\"ipEditInnerFormula(ipBody)\"><img src=\"images/icons/ic-edit-white.svg\" /> Edit IP cover</button>";
  id.innerHTML = content; //  INNER BODY

  var ipCurrentBody = document.getElementById('ip-current-card-body');
  ipCurrentBody.innerHTML += ipCurrentInnerContent(); // THIS IS THE INNER CONTENT
} // ---------------------------------------------------------------------
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
// 03  |||  CALCULATE TOTAL PREMIUM 
// ---------------------------------------------------------------------


var ipCurrentMultiplier = 0.9576 * ipMultiplier;
console.log('hello - can you read the multiplier? it is: ' + ipCurrentMultiplier);
var ipTotalPremiumCurrent = ipData.aal * ipCurrentMultiplier;
var percentOfSalary = ipData.benefit / ipData.salary * 100; // ---------------------------------------------------------------------
// 04  |||  CREATE INNER CARD CONTENT
// ---------------------------------------------------------------------

function ipCurrentInnerContent() {
  var content = ""; // content += `<label>Income Protection</label>`;
  // content += createCoverItemDefault("Income Protection","",0,"");

  content += createCoverItemDefault("Income Protection", "formula", ipData.aal, tooltips["formula"]); // content += createCoverItemSubText("","Percent of salary",`${percentOfSalary.toFixed()}%`,tooltips["percent salary"]);

  content += createCoverItemSubText("", "Waiting period", ipData["Waiting period"], tooltips["waiting period"]);
  content += createCoverItemSubText("", "Benefit period", ipData["Benefit period"], tooltips["benefit period"]);
  content += createCoverItemTotal("Monthly Premium", ipTotalPremiumCurrent, "/mth");
  return content;
}