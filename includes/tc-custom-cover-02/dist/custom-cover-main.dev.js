"use strict";

// ----------------------------------------------------------------
//   DATA SET UP
// ----------------------------------------------------------------
// Access the insuranceProducts array within currentCover
// var insuranceProductsArray = currentCover.insuranceProducts;
// var deathDataFixed = insuranceProductsArray[0].coverages[0];
// var deathDataAged = insuranceProductsArray[0].coverages[1];
// var tpdDataFixed = insuranceProductsArray[1].coverages[0];
// var ipData = insuranceProductsArray[2].coverages[0];
// let sData = deathDataFixed;
// let sProduct = insuranceProductsArray[0].product;
// ----------------------------------------------------------------
//   PAGE SET UP
// ----------------------------------------------------------------
// Create navbar
createNavbar( // Add text to the logo array - first item will be primary, from there text will be accent color
["Demo", "Super"], "../01-warm-welcome-dyn.html", "navbar"); // Create page header   

createHeader("Select Your Cover", "Use the options on this page to choose the cover that works for you.", "header");
createFooter("footer");
document.getElementById('data-test').innerHTML = createCurrentDeath();
createDeathTPDSliders('slider-test'); // ----------------------------------------------------------------
//   SET UP DEATH & TPD CARD
// ----------------------------------------------------------------
// CURRENT COVER!!
// --------------------------------------
// ------------------------------------------------------------------------------
// ******** DEATH & TPD ***********
// ------------------------------------------------------------------------------

function deathTPD() {
  // Handle custom cover creation for death & TPD
  var deathTPDContent; // Outer card
  // ------------------------------------------------------------------------------
  // ******** OUTER ***********
  // ------------------------------------------------------------------------------
  // *** OUTER Header

  deathTPDContent = createCardHeader("Death & Total, Permanent Disablement cover", "Learn about insurance cover types", "window.alert('Pop up with information about cover types');", ""); // *** OUTER body start

  deathTPDContent += "<div class=\"card-body\">\n        <div class=\"space v-large\"><!-- SPACER! --></div>\n        <p class=\"large\">If you wish to keep this existing cover, you don\u2019t need to do anything.</p>\n        <div class=\"space v-large\"><!-- SPACER! --></div>"; // ------------------------------------------------------------------------------
  // ******** INNER ***********
  // ------------------------------------------------------------------------------
  // ----------------------------------
  // -------> death 
  // ----------------------------------
  // **** Death Card container

  deathTPDContent += "<div id=\"death-container\">"; // Fill death with default current cover

  deathTPDContent += deathStateCurrentContent(); // close death card

  deathTPDContent += "</div></div>\n        <div class=\"space v-large\"><!-- SPACER! --></div>"; // ----------------------------------
  // -------> tpd
  // ----------------------------------
  // **** TPD Card container

  deathTPDContent += "<div id=\"tpd-container\">"; // Fill death with default current cover

  deathTPDContent += tpdStateCurrentContent(); // close death card

  deathTPDContent += "</div></div>\n        <div class=\"space v-large\"><!-- SPACER! --></div>";
  return deathTPDContent;
}

createCurrentDeath(); // ----------------------------------------------------------------
//   RESET TOOLTIP POS ON WINDOW RESIZE
// ----------------------------------------------------------------

var x = 0;

function sliderWindowResizeReset() {
  // run update
  updateTooltipPosition(resizeSlider, resizeTooltip);
}