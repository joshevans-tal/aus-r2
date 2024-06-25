"use strict";

// -----------------------------------------------------------------------------------------------------------------
// CTA COMPONENT - By josh evans
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// HIDE/SHOW
// -----------------------------------------------------------------------------------------------------------------
function hideShow(hideId, showId) {
  // Turn one id off and another on
  hide(hideId);
  show(showId);
}

function hide(id) {
  // hide an element with an id
  var hideMe = document.getElementById(id);
  hideMe.style.display = "none";
}

function show(id) {
  // show an element with an id
  var showMe = document.getElementById(id);
  showMe.style.display = "none";
} // -----------------------------------------------------------------------------------------------------------------
// FORMAT AS CURRENCY
// -----------------------------------------------------------------------------------------------------------------

/* FORMAT int or float to AUD $ */


function formatCurrency(num, roundInt) {
  var parsedNum = parseFloat(num); // format to AUD currency with optional decimals

  var formattedNum = parsedNum.toLocaleString('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: roundInt
  });
  return formattedNum;
} // -----------------------------------------------------------------------------------------------------------------
// ADD SPACE TO LAYOUT
// -----------------------------------------------------------------------------------------------------------------


function addSpace(size) {
  /*
      Available parameters:
      - 2xsmall, xsmall, small, medium, large, xlarge, 2xlarge, 3xlarge, 4xlarge
  */
  var content = "<div class=\"space v-".concat(size, "\"><!-- SPACER! --></div>");
  return content;
}