"use strict";

// set vars
var sliderMin = 0;
var sliderMax = 1000000;
var value = 261000;
var sliderId = "myslider";

function createTCSlider2() {
  // Access the insuranceProducts array within currentCover
  var insuranceProductsArray = currentCover.insuranceProducts; // Assuming the function generates HTML content based on insuranceProducts

  var sliderContent = ''; // Iterate through each product to build HTML content (hypothetical structure)

  insuranceProductsArray.forEach(function (product) {
    sliderContent += "<div class=\"product\">".concat(product.product, "</div>"); // Example of adding product names to the content

    product.coverages.forEach(function (coverage) {
      sliderContent += "<div class=\"coverage\">Type: ".concat(coverage.coverType, ", Benefit: ").concat(coverage.benefit, "</div>"); // Adding coverage details
    });
  }); // Return the generated HTML content

  return sliderContent;
}

function createTCSlider() {
  // ---------------
  // Correctly accessing the insuranceProducts array within currentCover
  var newInsuranceProductsArray = currentCover.insuranceProducts; // Logging the insuranceProducts array

  console.log("NEW Insurance Products Array:", newInsuranceProductsArray); // Correct example to access the "Death" product coverages

  var deathProduct = insuranceProductsArray.find(function (product) {
    return product.product === "Death";
  });
  console.log("NEW Death Product Coverages:", deathProduct.coverages); // ---------------
  // window.alert(currentCover);
  // Accessing the insuranceProducts array within currentCover[0]

  var insuranceProductsArray = currentCover[0]; // Logging the insuranceProducts array

  console.log("Insurance Products Array:", insuranceProductsArray); // Accessing the DeathCover property

  var deathCover = insuranceProductsArray.DeathCover;
  console.log("Death Cover:", deathCover); // Accessing the TPD Cover property

  var tpdCover = insuranceProductsArray.tpdCover;
  console.log("TPD Cover:", tpdCover); // Accessing specific properties of the Death Cover

  console.log("Death Cover Fixed Cover:", insuranceProductsArray.DeathCover.fixedCover);
  console.log("Death Cover Premium Base:", insuranceProductsArray.DeathCover.premiumBase); // Accessing specific properties of the TPD Cover

  console.log("TPD Cover Fixed Cover:", insuranceProductsArray.tpdCover.fixedCover);
  console.log("TPD Cover Premium Base:", insuranceProductsArray.tpdCover.premiumBase); // sliderId += currentCover.insuranceProducts[0].coverages[0].coverType;

  var str = "";
  str += "<div id=\"test\" class=\"slider-outer\">\n    <div id='death-slider-container' class=\"slider-container\">\n        <input id='death-slider-fixed' type=\"range\" class=\"slider\" min=\"0\" max=\"1000\" step=\"100\" value=\"30\">\n        <div id=\"death-tooltip\" class=\"slider-tooltip\">some amount</div>\n        <div id='death-min' class=\"label min-label\">$0</div><div class=\"label max-label\">$1000</div>\n    </div>\n    <div id=\"death-text-edit-container\" class=\"slider-text-input-container\">\n        <p class='label slider-text-label'>Death benefit</p>\n        <input id=\"death-text-input-fixed\" class=\"slider-text-input\" type=\"number\" value=\"10000000\" size=\"10\">\n    </div>\n</div>";
  return str;
}