"use strict";

// Access the insuranceProducts array within currentCover
var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var ipData = insuranceProductsArray[2].coverages[0];
var sData = deathDataFixed;
var sProduct = insuranceProductsArray[0].product;

function dataImport01(productName) {
  // sData = deathData;
  // sProduct = insuranceProductsArray[0].product;
  switch (productName) {
    case 'death-fixed':
      // code block
      sData = deathDataFixed;
      sProduct = insuranceProductsArray[0].product;
      break;

    case 'death-age-based':
      // code block
      sData = deathDataAged;
      sProduct = insuranceProductsArray[0].product;
      break;

    case 'tpd-fixed':
      // code block
      sData = tpdDataFixed;
      sProduct = insuranceProductsArray[1].product;
      break;

    case 'ip':
      // code block
      sData = ipData;
      sProduct = insuranceProductsArray[2].product;
      break;

    default: // code block

  } // Set html content var


  var sliderContent = ''; // Get html content passing product name can 'fixed' or not 

  sliderContent += createSliderHTML(productName, "units");
  var sliderReturn = [sliderContent, productName + "-slider", productName + "-tooltip", productName + "-text-input", productName + "-text-label"]; // console.log("SliderReturn is: "+sliderReturn[0]);
  // Return the generated HTML content

  return sliderReturn;
} // function createSliderHTML(productName, sliderType){


function createSliderHTML(productName, sliderType) {
  // window.alert("Booo!");
  var slider = "";

  if (sData.coverType === "Fixed") {
    console.log("this slider is: " + sliderType + "\nStep is: " + sData.step);
    slider += "<div id=\"test\" class=\"slider-outer\">\n        <div id='".concat(productName, "-slider-container' class=\"slider-container\">\n            <input id='").concat(productName, "-slider' type=\"range\" class=\"slider\" min=\"").concat(sData.min, "\" max=\"").concat(sData.max, "\" step=\"").concat(sData.step, "\" value=\"").concat(sData.benefit, "\">\n            <div id=\"").concat(productName, "-tooltip\" class=\"slider-tooltip\">").concat(formatCurrency(sData.benefit, 0), "</div>\n            <div id=\"").concat(productName, "-min\" class=\"label min-label\">").concat(formatCurrency(sData.min, 0), "</div>\n            <div class=\"label max-label\">").concat(formatCurrency(sData.max, 0), "</div>\n        </div>\n        <div id=\"").concat(productName, "-text-edit-container\" class=\"slider-text-input-container\">\n            <div class=\"label slider-text-label\">").concat(sProduct, " benefit</div>\n            <span class=\"input-prefix\">$</span>\n            <input id=\"").concat(productName, "-text-input\" \n                class=\"slider-text-input\" \n                type=\"number\" \n                min=\"").concat(sData.min, "\" \n                max=\"").concat(sData.max, "\" \n                step=\"").concat(sData.step, "\" \n                value=\"").concat(sData.benefit, "\"\n                oninput=\"textInputUpdates('").concat(productName, "-text-input', '").concat(productName, "-text-input.value','").concat(productName, "-slider', '").concat(productName, "-tooltip', ").concat(sData.min, ", ").concat(sData.max, ")\"\n                >\n        </div>\n        </div>");
  } else {
    {
      var dataOptions = "";

      for (var i = 0; i < sData.max; i += sData.step) {
        console.log(i);
        dataOptions += "<option class=\"unit-marks\">".concat(i, "</option>");
      }

      console.log("this slider is: " + sliderType);
      slider += "<div id=\"test\" class=\"slider-outer\">\n            <div id='".concat(productName, "-slider-container' class=\"slider-container\">\n                <input id='").concat(productName, "-slider' type=\"range\" class=\"slider\" min=\"").concat(sData.min, "\" max=\"").concat(sData.max, "\" step=\"").concat(sData.step, "\" value=\"").concat(sData.benefit, "\" list=\"").concat(productName, "-unit-marks\">\n                <datalist id=\"").concat(productName, "-unit-marks\" class=\"unit-marks\">\n                    ").concat(dataOptions, "\n                </datalist>\n                <div id=\"").concat(productName, "-tooltip\" class=\"slider-tooltip\">").concat(formatCurrency(sData.benefit, 0), "</div>\n                <div id=\"").concat(productName, "-min\" class=\"label min-label\">").concat(formatCurrency(sData.min, 0), "</div>\n                <div class=\"label max-label\">").concat(formatCurrency(sData.max, 0), "</div>\n            </div>\n            <div id=\"").concat(productName, "-text-edit-container\" class=\"slider-text-input-container\">\n                <div class=\"label slider-text-label\">").concat(sProduct, " units: <span id=\"").concat(productName, "-text-label\">").concat(sData.benefit / sData.step, "</span></div>\n                <span class=\"input-prefix\">$</span>\n                <input id=\"").concat(productName, "-text-input\" \n                    class=\"slider-text-input\" \n                    type=\"number\" \n                    min=\"").concat(sData.min, "\" \n                    max=\"").concat(sData.max, "\" \n                    step=\"").concat(sData.step, "\"\n                    value=\"").concat(sData.benefit, "\"\n                    oninput=\"textInputUpdates('").concat(productName, "-text-input', '").concat(productName, "-text-input.value','").concat(productName, "-slider', '").concat(productName, "-tooltip', ").concat(sData.min, ", ").concat(sData.max, ", '").concat(productName, "-text-label')\"\n\n                    >\n            </div>\n            </div>");
    } // oninput="textInputUpdates('${productName}-text-input', '${productName}-text-input.value','${productName}-slider', '${productName}-tooltip', ${sData.min}, ${sData.max})"
  }

  return slider;
} // ----------------------------------------------------------------
//   SLIDER + TEXT INPUT LISTENERS
// ----------------------------------------------------------------


function sliderListener(sliderId, tooltipId, textId, textLabelId) {
  //----- VARS -----
  console.log("First text id check: " + textLabelId);
  var slider = document.getElementById(sliderId);
  var tooltip = document.getElementById(tooltipId);
  var textInputLabel = document.getElementById(textLabelId);
  var textInput = document.getElementById(textId); //----- SLIDER LISTENER -----

  slider.addEventListener('input', function () {
    // set tooltip text
    tooltip.textContent = formatCurrency(slider.value, 0); // set text input

    textInput.value = slider.value;
    console.log("slider.value: " + slider.value + "\ntextId: " + textId); // set tooltip position

    updateTooltipPosition(slider, tooltip);

    if (textInputLabel) {
      textInputLabel.innerHTML = slider.value / slider.step;
    }

    console.log("textInputLabel:::::: " + textInputLabel);
  }); //----- TEXT LISTENER -----

  updateTooltipPosition(slider, tooltip);
}

function textInputUpdates(senderId, value, sliderId, tooltipID, txtMin, txtMax, textLabelId) {
  // console.log("TextInputUpdates func::: "
  // + "\nSenderText: " + senderId
  // + "\nvalue: " + value   
  // + "\nslider: " + sliderId
  // + "\ntooltip: " + tooltipId
  // + "\nmin: " + min
  // + "\nmax: " + max
  // )
  var txtInput = document.getElementById(senderId); // let value = sender.value;

  var slider = document.getElementById(sliderId);
  var tooltip = document.getElementById(tooltipID);
  var textInputLabel = document.getElementById(textLabelId); // let min = txtMin;
  // let max = txtMax;

  if (txtInput.value <= txtMax && txtInput.value >= txtMin) {
    // txtInput.classList.remove("danger");
    slider.value = txtInput.value;
    tooltip.textContent = formatCurrency(slider.value, 0);
    updateTooltipPosition(slider, tooltip);

    if (textInputLabel) {
      textInputLabel.innerHTML = slider.value / slider.step;
    }
  } else {
    // txtInput.classList.add("danger");
    txtInput.value = txtMax;
    slider.value = txtInput.value;
    tooltip.textContent = formatCurrency(slider.value, 0);
    updateTooltipPosition(slider, tooltip);

    if (textInputLabel) {
      textInputLabel.innerHTML = slider.value / slider.step;
    }
  }

  if (txtInput.value === "") {
    // txtInput.classList.add("danger");
    // tooltip.classList.add("danger");
    slider.value = 0;
    updateTooltipPosition(slider, tooltip);
    tooltip.textContent = formatCurrency(slider.value, 0);
  }
}

function updateTooltipPosition(slider, tooltip) {
  var sliderRect = slider.getBoundingClientRect();
  var tooltipRect = tooltip.getBoundingClientRect(); // console.log("sliderRect width: "+ sliderRect.width);
  // Calculate the percentage position of the slider handle

  var sliderValueRatio = (slider.value - slider.min) / (slider.max - slider.min); // Calculate the left position of the slider handle

  var sliderHandleLeft = sliderValueRatio * sliderRect.width; // console.log("sliderHandleLeft: "+ sliderHandleLeft);
  // Calculate the center position for the tooltip

  var tooltipLeft = sliderRect.left + sliderHandleLeft - tooltipRect.width / 2 + 12; // console.log(
  //     "\nsliderRect width: "+ sliderRect.width
  //     + "\ntooltipLeft: "+ tooltipLeft
  //     + "\ntooltip Width: "+ tooltipRect.width
  //     + "\nSUM elements: "
  //     + "\nsliderRect.left: "+ sliderRect.left
  //     + "\nsliderHandleLeft: "+ sliderHandleLeft
  //     );
  // console.log("tooltip Width: "+ tooltipRect.width);
  // Apply the calculated left position to the tooltip

  tooltip.style.left = "".concat(tooltipLeft, "px");
}
/*
`<div id="test" class="slider-outer">
    <div id='death-slider-container' class="slider-container">
        <input id='death-slider-fixed' type="range" class="slider" min="0" max="1000" step="100" value="30">
        <div id="death-tooltip" class="slider-tooltip">some amount</div>
        <div id='death-min' class="label min-label">$0</div><div class="label max-label">$1000</div>
    </div>
    <div id="death-text-edit-container" class="slider-text-input-container">
        <p class='label slider-text-label'>Death benefit</p>
        <input id="death-text-input-fixed" class="slider-text-input" type="number" value="10000000" size="10">
    </div>
</div>`;
*/
// Iterate through each product to build HTML content (hypothetical structure)

/*insuranceProductsArray.forEach(product => {
  sliderContent += `<div class="product">${product.product}</div>`; // Example of adding product names to the content
  product.coverages.forEach(coverage => {
    sliderContent += `<div class="coverage">Type: ${coverage.coverType}, Benefit: ${coverage.benefit}</div>`; // Adding coverage details
  });
});
*/