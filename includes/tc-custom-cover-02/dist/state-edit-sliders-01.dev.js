"use strict";

// ----------------------------------------------------------------
//   SLIDER + TEXT INPUT LISTENERS
// ----------------------------------------------------------------

/* 
        CALL script to load data and return array into slider1 variable
        Array returns: HTML content, range slider id, tooltip id, text input id, text input units label id
        To use returned array, reference array position
        Slider HTML.......... slider1[0]
        Slider id............ slider1[1]
        Tooltip id........... slider1[2]
        Text input id........ slider1[3]
        Text input label id.. slider1[4]
*/
// createDeathTPDSliders('slider-test'); // Function found in custom-cover-main.js
function createDeathTPDSliders(id) {
  var sliderDivs = "<div id=\"slider-container-death-fixed\"></div>\n        <div id=\"slider-container-death-aged\"></div>\n        <div id=\"slider-container-tpd-fixed\"></div>";
  document.getElementById(id).innerHTML = sliderDivs; // CREATE Death fixed slider

  var slider1 = sliderInit('death-fixed'); // Add slider html to document

  document.getElementById('slider-container-death-fixed').innerHTML = slider1[0]; // Add listeners using slider id and tooltip id

  sliderListener(slider1[1], slider1[2], slider1[3], slider1[4]); // CREATE Death age-based slider

  var slider2 = sliderInit('death-age-based'); // add slider to the page

  document.getElementById('slider-container-death-aged').innerHTML = slider2[0]; // Add listeners using slider id and tooltip id

  sliderListener(slider2[1], slider2[2], slider2[3], slider2[4]); // CREATE TPD flixed slider

  var slider3 = sliderInit('tpd-fixed'); // add slider to the page

  document.getElementById('slider-container-tpd-fixed').innerHTML = slider3[0]; // Add listeners using slider id and tooltip id

  sliderListener(slider3[1], slider3[2], slider3[3], slider3[4]);
} // ----------------------------------------------------------------
//   RESET TOOLTIP POS ON WINDOW RESIZE
// ----------------------------------------------------------------


var x = 0;

function sliderWindowResizeReset() {
  // var txt = x += 1;
  // document.getElementById("demo").innerHTML = txt;
  // RESIZE SLIDER 01 ****
  var resizeSlider = document.getElementById(slider1[1]);
  var resizeTooltip = document.getElementById(slider1[2]); // run update

  updateTooltipPosition(resizeSlider, resizeTooltip); // RESIZE SLIDER 02 ****

  resizeSlider = document.getElementById(slider2[1]);
  resizeTooltip = document.getElementById(slider2[2]); // run update

  updateTooltipPosition(resizeSlider, resizeTooltip);
}