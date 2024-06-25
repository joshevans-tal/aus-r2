"use strict";

// BODY ID IS "body-content-container"
// JSON VARS
var deathData = currentCover[0].DeathCover;
document.getElementById("body-content-container").innerHTML = currentCover[0]; // CURRENT COVER!!
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

  deathTPDContent += "<div class=\"card-body\">\n    <div class=\"space v-large\"><!-- SPACER! --></div>\n    <p class=\"large\">If you wish to keep this existing cover, you don\u2019t need to do anything.</p>\n    <div class=\"space v-large\"><!-- SPACER! --></div>"; // ------------------------------------------------------------------------------
  // ******** INNER ***********
  // ------------------------------------------------------------------------------
  // ----------------------------------
  // -------> death 
  // ----------------------------------
  // **** Death Card container

  deathTPDContent += "<div id=\"death-container\">"; // Fill death with default current cover

  deathTPDContent += deathStateCurrentContent(); // close death card

  deathTPDContent += "</div></div>\n    <div class=\"space v-large\"><!-- SPACER! --></div>"; // ----------------------------------
  // -------> tpd
  // ----------------------------------
  // **** TPD Card container

  deathTPDContent += "<div id=\"tpd-container\">"; // Fill death with default current cover

  deathTPDContent += tpdStateCurrentContent(); // close death card

  deathTPDContent += "</div></div>\n    <div class=\"space v-large\"><!-- SPACER! --></div>";
  return deathTPDContent;
} // ------------------------------------------------------------------------------
// ******** INCOME PROTECTION ***********
// ------------------------------------------------------------------------------


function ipCover() {
  // Handle custom cover creation for IP
  var ipContent; // Outer card
  // *** OUTER Header

  ipContent = createCardHeader("Income Protection (IP)", "Learn about insurance cover types", "window.alert('Pop up with information about cover types');", ""); // *** OUTER body start

  ipContent += "<div class=\"card-body\">\n    <div class=\"space v-large\"><!-- SPACER! --></div>\n    <p class=\"large\">If you wish to keep this existing cover, you don\u2019t need to do anything.</p>\n    <div class=\"space v-large\"><!-- SPACER! --></div>"; // ------------------------------------------------------------------------------
  // ******** INNER ***********
  // ------------------------------------------------------------------------------
  // ----------------------------------
  // -------> Income Protection 
  // ----------------------------------
  // **** Death Card container

  ipContent += "<div id=\"ip-container\">"; // Fill death with default current cover

  ipContent += ipStateCurrentContent(); // close death card

  ipContent += "</div></div>\n    <div class=\"space v-large\"><!-- SPACER! --></div></div>"; // Death & TPD total premium bar before outer card end

  return ipContent;
} // -------------------------------------------------------------
// SUPPORT FUNCTIONS!!
// -------------------------------------------------------------
// -------------------------------------------------------------
// CURRENT COVER
// -------------------------------------------------------------
// ----------------------------------
// -------> death 
// ----------------------------------


function deathStateCurrentContent() {
  // Handle the creation of the inner content of the death card - Current
  var str = ""; // DEATH HEAD  ---->   createCardHeaderAction(title, sub, subClick, style, action)

  str += createCardHeaderAction("Your current death benefit is:", "Learn about insurance cover types", "window.alert('Death cover provides a lump sum payment when... Explain death product basics');", "bglight", "<button class=\"secondary btn-small danger\" onclick='document.getElementById(\"death-container\").innerHTML = deathStateCancelContent();'>Cancel</button>"); // *** START INNER death body

  str += "<div class=\"card-body\">";
  str += createCoverItemDefault("Death", "Fixed", formatCurrency(deathData.benefit, 0), "Explanation of death cover");
  str += createCoverItemTotal("Monthly premium", 82.53, "/mth");
  return str;
} // *** TPD CURRENT


function tpdStateCurrentContent() {
  // Handle the creation of the inner content of the death card - Current
  var str = ""; // TPD HEAD  ---->   createCardHeaderAction(title, sub, subClick, style, action)

  str += createCardHeaderAction("Your current TPD benefit is:", "Learn about insurance cover types", "window.alert('TPD cover provides a lump sum payment when... Explain death product basics');", "bglight", "<button class=\"secondary btn-small danger\" onclick='document.getElementById(\"tpd-container\").innerHTML = tpdStateCancelContent();'>Cancel</button>"); // *** START INNER death body

  str += "<div class=\"card-body\">";
  str += createCoverItemDefault("TPD", "Fixed", 271000, "Explanation of death cover");
  str += createCoverItemTotal("Monthly premium", 82.53, "/mth");
  return str;
} // *** IP CURRENT


function ipStateCurrentContent() {
  // Handle the creation of the inner content of the death card - Current
  var str = ""; // TPD HEAD  ---->   createCardHeaderAction(title, sub, subClick, style, action)

  str += createCardHeaderAction("Your current TPD benefit is:", "Learn about insurance cover types", "window.alert('Income Protection provides monthly payments when... Explain death product basics');", "bglight", "<button class=\"secondary btn-small danger\" onclick='document.getElementById(\"ip-container\").innerHTML = ipStateCancelContent();'>Cancel</button>"); // *** START INNER death body

  str += "<div class=\"card-body\">";
  str += createCoverItemDefault("Income Protection", "", 0, "");
  str += createCoverItemSubText("", "Benefit amount", "N/A", "Explanation of Ip cover");
  str += createCoverItemSubText("", "Percent of salary", "N/A", "Explanation of Ip percent of salary");
  str += createCoverItemSubText("", "Waiting period", "N/A", "Explanation of Ip waiting period");
  str += createCoverItemSubText("", "Benefit period", "N/A", "Explanation of Ip benefit period");
  return str;
} // -------------------------------------------------------------
// CANCEL COVER
// -------------------------------------------------------------
// *** DEATH CANCEL


function deathStateCancelContent() {
  // Handle the creation of the inner content of the death card - Current
  var str = ""; // DEATH HEAD  ---->   createCardHeaderAction(title, sub, subClick, style, action)

  str += createCardHeaderAction("Your current death benefit is:", "Learn about insurance cover types", "window.alert('Death cover provides a lump sum payment when... Explain death product basics');", "bglight", "<button class=\"secondary btn-small\" onclick='document.getElementById(\"death-container\").innerHTML = deathStateCurrentContent();'>Reset</button>"); // *** START INNER death body

  str += "<div class=\"card-body\">";
  str += "<div>\n        <h3>You are cancelling your death cover</h3>\n        <p>Your request to cancel your Death cover will be processed after you complete this application.</p>\n        <p>It is important to understand that, once you have cancelled your cover, you may not be elligibile for the same cover due to changes in your health status. If you wish to proceed, you may do so at the bottom of this page.</p>\n    </div>";
  return str;
} // *** TPD CANCEL


function tpdStateCancelContent() {
  // Handle the creation of the inner content of the death card - Current
  var str = ""; // DEATH HEAD  ---->   createCardHeaderAction(title, sub, subClick, style, action)

  str += createCardHeaderAction("Your current TPD benefit is:", "Learn about insurance cover types", "window.alert('Death cover provides a lump sum payment when... Explain death product basics');", "bglight", "<button class=\"secondary btn-small\" onclick='document.getElementById(\"tpd-container\").innerHTML = tpdStateCurrentContent();'>Reset</button>"); // *** START INNER death body

  str += "<div class=\"card-body\">";
  str += "<div>\n        <h3>You are cancelling your TPD cover</h3>\n        <p>Your request to cancel your Death cover will be processed after you complete this application.</p>\n        <p>It is important to understand that, once you have cancelled your cover, you may not be elligibile for the same cover due to changes in your health status. If you wish to proceed, you may do so at the bottom of this page.</p>\n    </div>";
  return str;
} // *** IP CANCEL


function ipStateCancelContent() {
  // Handle the creation of the inner content of the death card - Current
  var str = ""; // DEATH HEAD  ---->   createCardHeaderAction(title, sub, subClick, style, action)

  str += createCardHeaderAction("Your current IP benefit is:", "Learn about insurance cover types", "window.alert('Death cover provides a lump sum payment when... Explain Income Protection product basics');", "bglight", "<button class=\"secondary btn-small\" onclick='document.getElementById(\"ip-container\").innerHTML = ipStateCurrentContent();'>Reset</button>"); // *** START INNER death body

  str += "<div class=\"card-body\">";
  str += "<div>\n        <h3>You are cancelling your Income Protection cover</h3>\n        <p>Your request to cancel your Death cover will be processed after you complete this application.</p>\n        <p>It is important to understand that, once you have cancelled your cover, you may not be elligibile for the same cover due to changes in your health status. If you wish to proceed, you may do so at the bottom of this page.</p>\n    </div>";
  return str;
}