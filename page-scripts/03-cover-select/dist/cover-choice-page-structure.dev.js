"use strict";

// -----------------------------------------------------------------------------------------------------------------
// CREATE PAGE CONTENT STRUCTURE
// -----------------------------------------------------------------------------------------------------------------
// BODY CONTAINER IS id="content-container"
var bodyContainer = document.getElementById("content-container");
/*
    <<< HOW DOES THIS WORK? >>>>
    This page sets up the id refs then builds it using exteral state js files.
    We first build Outer Cards -> Then find refs -> then add inner cards to those ref elements
    
    1. First the outer card refs are set up as empty vars. E.g. let deathContainer;
    
    2. The function initCurrentCover() uses the external js content functions to
    build out an intial current cover card structure. 

    THE CREATED STRUCTURE WILL BE CARDS WITH THE FOLLOWING IDs:
    * death-card-container
    * death-card-head
    * death-card-body
    ------------------------
    * tpd-card-container
    * tpd-card-head
    * tpd-card-body
    ------------------------
    * ip-card-container
    * ip-card-head
    * ip-card-body
    
    3. function updateOuterCardRefs() turns those ids into getElementbyId() refs
    and saves them to their respective Ref Var for easy use. 
    
    4. We can then add content to those references either directly
    eg. deathBody.innerHTML += `<p>If you wish to keep this existing cover, you don’t need to do anything.<br><br></p>`;

    or through a content function.
    eg. initCurrentCoverInner();


    !!!! IMPORTANT !!!!
    THIS SCRIPT ASSUMES::
       
        >   The HTML page was created using: tc-page-template.js - which provides the body structure.

        >   The following scripts are imported in the HTML doc head:
                <script src="./state-current/cover-state-death-current.js"></script>
                <script src="./state-current/cover-state-tpd-current.js"></script>
                <script src="./state-current/cover-state-ip-current.js"></script>


    */
// STEP 01  |||  SET UP EMPTY CONTENT ID VARS

var deathContainer;
var deathHead;
var deathBody;
var tpdContainer;
var tpdHead;
var tpdBody;
var ipContainer;
var ipHead;
var ipBody; // STEP 02  |||  CREATE OUTER CARDS

function initCurrentCover() {
  // **** CURRENT COVER OUTER ****
  // ---------------------------------------------------------------------
  // CREATE DEATH CARD ----->> cover-state-death-current.js
  // ---------------------------------------------------------------------
  deathCurrentOuter(bodyContainer); // ---------------------------------------------------------------------
  // CREATE TPD CARD   ----->> cover-state-tpd-current.js
  // ---------------------------------------------------------------------

  tpdCurrentOuterCard(bodyContainer); // ---------------------------------------------------------------------
  // CREATE IP CARD   ----->> cover-state-ip-current.js 
  // ---------------------------------------------------------------------

  ipCurrentOuterCard(bodyContainer);
  var coverTotals = "<div id=\"cover-totals-container\">";
  coverTotals += "<h3 class=\"make-flex\">NEW total premium</h3>";
  coverTotals += createCoverItemDefault("Death Cover", '', deathPremiumCurrent, '', 'cart-death');
  coverTotals += createCoverItemDefault("TPD Cover", '', tpdPremiumCurrent, '', 'cart-tpd');
  coverTotals += createCoverItemDefault("Income Protection", '', ipPremiumCurrent, '', 'cart-ip');
  coverTotals += createCoverItemTotal("Estimated total premium", deathPremiumCurrent + tpdPremiumCurrent + ipPremiumCurrent, '/mth', 'cart-total-cover');
  coverTotals += "</div><br>";
  bodyContainer.innerHTML += coverTotals; // bodyContainer.innerHTML += 'some more text';

  bodyContainer.innerHTML += tcCTA( // Set cta layout DEFAULT should be 'fullwidth' - any other value will collaps the buttons
  'fullwidth', // Define 2D array of buttons
  [['primary', 'large', 'Confirm & continue', "window.location = (\"04-confirm-cover-latest.html\")"], ['tertiary', 'large', 'Cancel & exit', "window.location = ('index.html');"]]);
} // STEP 03  |||  UPDATE ID REFERENCES


function updateOuterCardRefs() {
  // ---------------------------------------------------------------------
  // CREATE DEATH CARD ID REFS
  // ---------------------------------------------------------------------
  deathContainer = document.getElementById('death-card-container');
  deathHead = document.getElementById('death-card-head');
  deathBody = document.getElementById('death-card-body'); // ---------------------------------------------------------------------
  // CREATE TPD CARD ID REFS
  // ---------------------------------------------------------------------

  tpdContainer = document.getElementById('tpd-card-container');
  tpdHead = document.getElementById('tpd-card-head');
  tpdBody = document.getElementById('tpd-card-body'); // ---------------------------------------------------------------------
  // CREATE IP CARD ID REFS
  // ---------------------------------------------------------------------

  ipContainer = document.getElementById('ip-card-container');
  ipHead = document.getElementById('ip-card-head');
  ipBody = document.getElementById('ip-card-body');
} // STEP 04  |||  POPULATE CARDS WITH INNER CARD CONTENT


function initCurrentCoverInner() {
  // ---------------------------------------------------------------------------------------------
  // Death Current cover INNER using: cover-state-death-current.js => Import in doc head
  // ---------------------------------------------------------------------------------------------
  // CONTENT
  deathCurrentInner(deathBody); // ---------------------------------------------------------------------------------------------
  // TPD Current cover INNER using: cover-state-tpd-current.js => Imported in HTML head
  // ---------------------------------------------------------------------------------------------
  // CONTENT

  tpdCurrentInner(tpdBody); // ---------------------------------------------------------------------------------------------
  // IP Current cover INNER using: cover-state-tpd-current.js => Imported in HTML head
  // ---------------------------------------------------------------------------------------------
  // CONTENT

  ipCurrentInnerCard(ipBody); // EDIT BUTTON
  // ipBody.innerHTML += `
  // <button 
  //     class='primary btn-medium btn-full'
  //     onclick='window.alert("edit me!)";'
  //     >Edit IP cover
  // </button>`;
}

initCurrentCover();
updateOuterCardRefs(); // ---------------------------------------------------------------------
// ADD INTROS TO OUTER CARDS
// ---------------------------------------------------------------------
// deathBody.innerHTML += `<p>If you wish to keep this existing cover, you don’t need to do anything.<br><br></p>`;

tpdBody.innerHTML += "<p>If you wish to keep this existing cover, you don\u2019t need to do anything.<br><br></p>";
ipBody.innerHTML += "<p>If you wish to keep this existing cover, you don\u2019t need to do anything.<br><br></p>"; // ---------------------------------------------------------------------
// ADD CURRENT COVER INNER CONTENT
// ---------------------------------------------------------------------

initCurrentCoverInner(); // ---------------------------------------------------------------------
// ADD CORE EDUCATION MODAL
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ADD COVER TOTAL LIST
// ---------------------------------------------------------------------

var newDeathPremium = 0;
var newTPDPremium = 0;
var newIPPremium = 0;
var newTotalPremium = 0;
var newDeathPremiumId = document.getElementById('cart-death-item-value');
var newTPDPremiumId = document.getElementById('cart-tpd-item-value');
var newIPPremiumId = document.getElementById('cart-ip-item-value');
var newTotalPremiumId = document.getElementById('cart-total-cover');

function updateCartTotals() {
  newDeathPremiumId.innerHTML = "".concat(formatCurrency(newDeathPremium), " /mth");
  sessionStorage.setItem('new-death-premium', newDeathPremium);
  newTPDPremiumId.innerHTML = "".concat(formatCurrency(newTPDPremium), " /mth");
  sessionStorage.setItem('new-tpd-premium', newTPDPremium);
  newIPPremiumId.innerHTML = "".concat(formatCurrency(newIPPremium), " /mth");
  sessionStorage.setItem('new-ip-premium', newIPPremium);
  newTotalPremiumId.innerHTML = "".concat(formatCurrency(newDeathPremium + newTPDPremium + newIPPremium), " /mth");
  sessionStorage.setItem('new-total-premium', newDeathPremium + newTPDPremium + newIPPremium);
}