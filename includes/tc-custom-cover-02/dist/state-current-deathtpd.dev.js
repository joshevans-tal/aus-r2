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
function createCurrentDeath() {
  // Handle the creation of the inner content of the death card - Current
  var str = ""; // DEATH HEAD  ---->   createCustomCardHeader(title, sub, subClick, style, id, action)

  str += createCardHeaderAction("Your current death benefit is:", "Learn about insurance cover types", "window.alert('Death cover provides a lump sum payment when... Explain death product basics');", "bglight", "<button class=\"secondary btn-small danger\" onclick='document.getElementById(\"death-container\").innerHTML = deathStateCancelContent();'>Cancel</button>"); // *** START INNER death body

  str += "<div class=\"card-body\">";
  str += createCoverItemDefault("Death", "Fixed", deathDataFixed.benefit, "Explanation of death cover");
  str += createCoverItemTotal("Monthly premium", deathDataFixed.premiumBase * deathDataFixed.benefit, "/mth");
  str += "</div>";
  return str;
}

function createCurrentTPD() {
  var str = "<div>This is Current TPD content";
  return str;
}