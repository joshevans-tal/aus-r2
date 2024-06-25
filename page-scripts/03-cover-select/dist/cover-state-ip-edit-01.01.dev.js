"use strict";

// ---------------------------------------------------------------------
// ******** CUSTOM COVER – DEATH - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    

    **  This script is called from "cover-state-ip-current.js"
    
        First, ipEditInner(id) is called. It is passed a reference to the 
        outer-card body with ipEditInner(ipBody);
    
    1.  DEATH EDIT INNER FUNC STARTS PROCESS
        > Is NOT a return func – it creates directly into the given id using innerHTML
        
    FIRST : MAIN Structure
        1.1 | It sets up the 'content' var
        1.2 | It creates an inner card with no education or action
                - This creates an inner card id 'ip-edit-card-body'
        1.3 | Create a 'reset' btn, which calls ip current cover, 
              sending back the given outer card id with ipCurrentInner(ipBody);
    SECOND : INNER STRUCTURE
        1.4 | It then creates a var to hold inner-card body id: 'ipEditBody'
        1.5 | The inner-card body is populated first with innerHTML = ipEditInnerContent();
                > This is a return function
                > It returns html structure including:
                    - Age-based switch on/off pattern
                    - Fixed slider containers with hard coded ids
    THIRD : EDIT FUNCTIONS ARE BUILT
        1.6 | Once the html content structure is in place, the sliders are added
              using a function call 'createIPSliders();'
        1.7 | Create-slider function is a hard coded slider call. It is:
                > specific to ip right now
                > knows the specific ids add for the ip slider
                > Initiates a slider using a specific product name
                    eg. let slider1 = sliderInit('ip-fixed');

       

    !!!! IMPORTANT !!!!
    THIS SCRIPT ASSUMES::
       
        >   The HTML page <script src="./cover-choice-page-structure.js"></script> at the bottom of the page
            or has some other way of being called. This script won't call itself. 


*/
// ---------------------------------------------------------------------
// 02  |||  CREATE DEATH INNER CARD
// ---------------------------------------------------------------------
function ipEditInner(id) {
  /// 1 || START CONTENT INSIDE OUTER CARD
  var content = "<p>Select your new Income Protection benefit options below.</p>\n    <div class=\"space v-small\"><!-- SPACER! --></div>\n    <p><label class=\"bold\" >Select your cover type:</label><p>\n    <div class=\"space v-medium\"><!-- SPACER! --></div>\n    <div class=\"make-flex flex-gap-small\">\n    <button class='primary btn-medium ' onclick='#'>Formula</button>\n    <button class='secondary btn-medium ' onclick='ipCurrentInnerCard(ipBody);'>Fixed</button>\n    </div>\n    <div class=\"space v-large\"><!-- SPACER! --></div>\n    "; // 2 || CREATE INNER CARD

  content += tcCard("ip-edit", "bglight", "IP benefit:", "hide", "window.alert('Education content about cover types')", "", "Initialise"); // 3 || ADD CONTENT AFTER INNER CARD

  content += "<button class='secondary btn-medium btn-full'onclick='ipCurrentInnerCard(ipBody);'><img src=\"images/icons/ic-reset.svg\" /> Reset to existing cover</button>";
  id.innerHTML = content;
  var ipEditBody = document.getElementById('ip-edit-card-body');
  ipEditBody.innerHTML += ipEditInnerContent(); // THIS IS THE INNER CONTENT
  // ipEditInnerContent();

  createIPSliders();
}

function ipEditInnerFormula(id) {
  /// 1 || START CONTENT INSIDE OUTER CARD
  var content = "<p>Select your new Income Protection benefit options below.</p>\n    <div class=\"space v-small\"><!-- SPACER! --></div>\n    <p><label class=\"bold\" >Select your cover type:</label><p>\n    <div class=\"space v-medium\"><!-- SPACER! --></div>\n    <div class=\"make-flex flex-gap-small\">\n    <!--<button class='secondary btn-medium ' disabled onclick='ipEditInnerFormula(ipBody)'>Formula</button>-->\n    <button class='secondary btn-medium ' disabled onclick='#'>Formula</button>\n    <button class='primary btn-medium ' onclick='ipEditInnerFixed(ipBody);'>Fixed 13</button>\n    </div>\n    <div class=\"space v-large\"><!-- SPACER! --></div>\n    "; // 2 || CREATE INNER CARD

  content += tcCard("ip-edit", "bglight", "IP benefit:", "hide", "window.alert('Education content about cover types')", "", "Initialise"); // 3 || ADD CONTENT AFTER INNER CARD

  content += "<button class='secondary btn-medium btn-full'onclick='ipCurrentInnerCard(ipBody);'><img src=\"images/icons/ic-reset.svg\" /> Reset to existing cover</button>\n    <button class='secondary btn-medium btn-full' onclick='testIP();'><img src=\"images/icons/ic-reset.svg\" /> Reset to existing cover</button>\n    ";
  id.innerHTML = content;
  var ipEditBody = document.getElementById('ip-edit-card-body');
  ipEditBody.innerHTML += ipEditInnerContent(); // THIS IS THE INNER CONTENT
  // ipEditInnerContent();

  createIPSliders();
}

function testIP() {
  window.alert('Oi!');
  document.getElementById('ip-card-body').innerHTML = "hello";
  ipEditInnerFixed('ip-card-body');
} // ---------------------------------------------------------------------
// CREATE DEATH INNER CONTENT
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
// 03  |||  CALCULATE TOTAL PREMIUM - TO DO!!!!
// ---------------------------------------------------------------------


function ipTotalPremiumFixed(coverArray) {
  var totalPremium = '';

  for (i = 0; i < coverArray.length; i++) {
    totalPremium += coverArray[i];
  }

  return totalPremium;
} // TOTAL BENEFIT


var currentTotalIPBenefit = updateTotalBenefit([ipData.max, ipData.benefit]);
console.log('currentTotalIPBenefit: ' + currentTotalIPBenefit);

function updateTotalBenefit(coverArray) {
  var totalBenefit = '';

  for (i = 0; i < coverArray.length; i++) {
    totalBenefit += coverArray[i];
  }

  return totalBenefit;
} // ---------------------------------------------------------------------
// 04  |||  RETURN - INNER CARD CONTENT STRUCTURE
// ---------------------------------------------------------------------


function ipEditInnerContent() {
  // ************** ADD CONTENT WHEREVER YOU WANT ***********
  // content += `I'm inside inner ip. Yipee! ipData.benefit: ${ipData.benefit}`;
  // document.getElementById("slider-test").innerHTML = "WHWOOHWONWWNOWKLJ";
  // Total premium calc
  var ipPremiumCurrent = ipData.benefit * ipData.premiumBase + ipData.benefit * ipData.premiumBase; // createIPIPSliders(ipBody);
  // Content var to return

  content = "Formula pattern";
  content += "<div class=\"tc-inline-alert make-flex column low-contrast\">";
  content += "\n    ".concat(createCoverItemDefault("Basic IP Cover", ipData.coverType, ipData.max, "Age-based changes your benefit amount with your age, while keeping your premiums more steady.", 'basic-ip-aged'));
  content += tcSwitch('ip-aged-switch', 'Don\'t include', 'Include', 'round', 'checked');
  content += "</div>";
  content += "<br><p><strong>Add a <extra> fixed ip cover</strong></p>";
  content += "<div id=\"slider-container-ip-fixed\"></div>\n                <div id=\"slider-container-ip-aged\"></div>\n                <br>"; // Cover items at bottom of card

  content += "<div class=\"accordion-container\">";
  content += "".concat(createCoverItemDefault("IP cover", 'Basic', ipData.max, "Our Basic cover is an Age-based cover, which changes your benefit amount with your age, while keeping your premiums more steady.", 'ip-aged'));
  content += "".concat(createCoverItemDefault("IP cover", ipData.coverType, ipData.benefit, "Age-based changes your benefit amount with your age, while keeping your premiums more steady.", 'ip-fixed'));
  content += "".concat(createCoverItemTotal('Total ip:', currentTotalIPBenefit, '', 'total-ip-value-item'), "\n        "); // content += `<div id="ip-total-premium" class="total-premium">This is the total premium: ${ipPremiumCurrent}</div>`;

  content += "</div>";
  return content;
} // ---------------------------------------------------------------------
// 05  |||  CREATE SLIDERS
// ---------------------------------------------------------------------


function createIPSliders(id) {
  // ----------------------------------------------------------------
  // SLIDERS CAN BE CREATED IN THE FOLLOWING DIVS
  // ----------------------------------------------------------------

  /* 
  let sliderDivs = `
  <div id="slider-container-ip-fixed"></div>
  <div id="slider-container-ip-aged"></div>`
  */
  // document.getElementById(id).innerHTML = sliderDivs;

  /* 
  CREATE IP fixed slider
  This means if productName was "ip-fixed" slider2[] would be:
         [
          fixed slider HTML with ip data (max, min etc), .. // slider2[0]
          "ip-fixed-slider", .............................. // slider2[1]
          "ip-fixed-tooltip", ............................. // slider2[2] 
          "ip-fixed-text-input", .......................... // slider2[3] ––> text input
          "ip-fixed-text-label" ........................... // slider2[4] ––> text input label
          "ip-fixed-item-value" ........................... // slider2[5] ––> total cover item
          ]
  */
  // ----------------------------------------------------------------
  // INIT SLIDER - setting 'slider1' as an array
  // ----------------------------------------------------------------      
  var slider1 = sliderInit('ip-fixed'); // Add slider html to document

  document.getElementById('slider-container-ip-fixed').innerHTML = slider1[0]; // Add listeners using slider id and tooltip id

  sliderListener(slider1[1], slider1[2], slider1[3], slider1[4], slider1[5]);
  console.log("\n                \n slider1[1]: ".concat(slider1[1], ",\n                \n slider1[2]: ").concat(slider1[2], ",\n                \n slider1[3]: ").concat(slider1[3], ",\n                \n slider1[4]: ").concat(slider1[4])); // ----------------------------------------------------------------
  // SET SESSION STORAGE - FOR SLIDER
  // ----------------------------------------------------------------

  sessionStorage.setItem(slider1[1], document.getElementById(slider1[1]).value); // console.log('currentTotalIPBenefit: '+currentTotalIPBenefit);
  // ----------------------------------------------------------------
  // LISTENER - DEATH AGED SWITCH
  // ----------------------------------------------------------------

  var checkbox = document.getElementById("ip-aged-switch");
  var ipAgedCoverItem = document.getElementById('ip-aged-item-value');
  var ipTotalCoverItem = document.getElementById('total-ip-value-item');
  var ipCurrentInnerFooter = document.getElementById('ip-edit-card-footer');
  updateCoverItemTotalsIP();
  checkbox.checked = true;
  sessionStorage.setItem('ip-aged', checkbox.checked); // // 4.1 || FILL INNER CARD FOOTER WITH CONTENT
  // // Get the reference id
  // let ipCurrentInnerFooter = document.getElementById('ip-current-card-footer');
  // // Add content to that it
  // ipCurrentInnerFooter.innerHTML = ipCurrenInnerFooterContent();

  if (checkbox) {
    sessionStorage.setItem('ip-aged', ipData.max);
    console.log("Switch state is: " + this.checked);
    checkbox.addEventListener('change', function () {
      // console.log("Switch state is: " + this.checked);
      // Call any function here with `this.checked` as parameter
      if (this.checked) {
        console.log('This is checked!!!! - i can change stuff');
        ipAgedCoverItem.innerHTML = formatCurrency(ipData.max, 0);
        sessionStorage.setItem('ip-aged', ipData.max);
        updateCoverItemTotalsIP();
      } else {
        ipAgedCoverItem.innerHTML = formatCurrency(ipData.benefit, 0);
        console.log('This is checkbox false/else condition');
        sessionStorage.setItem('ip-aged', ipData.benefit);
        updateCoverItemTotalsIP();
      }
    });
  }

  function updateCoverItemTotalsIP() {
    currentFixed = document.getElementById('ip-fixed-slider').value;
    currentAged = sessionStorage.getItem('ip-aged');
    ipTotalCoverItem.innerHTML = formatCurrency(Math.trunc(currentFixed) + Math.trunc(currentAged), 0);
    console.log("currentFixed: ".concat(currentFixed, "\n                    \ncurrentAged: ").concat(currentAged));
    ipCurrentInnerFooter.innerHTML = ipEditInnerFooterContent(currentAged, currentFixed);
  }

  var ipFixedSlider = document.getElementById('ip-fixed-slider');
  ipFixedSlider.addEventListener('input', function () {
    updateCoverItemTotalsIP();
    console.log('This is my new listener');
  }); // ipEditInnerFooterContent();

  function ipEditInnerFooterContent(aged, fixed) {
    var premium = Math.trunc(aged) * ipData.premiumBase + Math.trunc(fixed) * ipData.premiumBase;
    sessionStorage.setItem('ip-new-premium', premium);
    var content = "<div class=\"footer-premium\">\n            <div>Monthly premium: <div>\n            <div>".concat(formatCurrency(premium, 0), "/mth</div>\n            <div>");
    return content;
  } // ----------------------------------------------------------------
  // UN-HIDE THIS FOR AN AGE_BASED SLIDER
  // ----------------------------------------------------------------
  // // CREATE IP age-based slider
  // let slider2 = sliderInit('ip-age-based');
  // // add slider to the page
  // document.getElementById('slider-container-ip-aged').innerHTML = slider2[0];
  // // Add listeners using slider id and tooltip id
  // sliderListener(slider2[1], slider2[2], slider2[3], slider2[4]);
  // ----------------------------------------------------------------
  // ----------------------------------------------------------------
  // REFERENCE FOR A FIXED IP SLIDER
  // ----------------------------------------------------------------
  // // CREATE IP flixed slider
  // let slider3 = sliderInit('ip-fixed');
  // // add slider to the page
  // document.getElementById('slider-container-ip-fixed').innerHTML = slider3[0];
  // // Add listeners using slider id and tooltip id
  // sliderListener(slider3[1], slider3[2], slider3[3], slider3[4]);
  // ----------------------------------------------------------------

}