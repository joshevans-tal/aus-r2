"use strict";

function deathSelect() {
  // Handle custom cover creation for death & TPD
  var deathContent; // Outer card
  // ------------------------------------------------------------------------------
  // ******** OUTER ***********
  // ------------------------------------------------------------------------------
  // *** OUTER Header

  deathContent = createCardHeader("Death & Total, Permanent Disablement cover", "Learn about insurance cover types", "window.alert('Pop up with information about cover types');", ""); // *** OUTER body start

  deathContent += "<div class=\"card-body\">\n    <div class=\"space v-large\"><!-- SPACER! --></div>\n    <p class=\"large\">If you wish to keep this existing cover, you don\u2019t need to do anything.</p>\n    <div class=\"space v-large\"><!-- SPACER! --></div>"; // ------------------------------------------------------------------------------
  // ******** INNER ***********
  // ------------------------------------------------------------------------------
  // ----------------------------------
  // -------> death 
  // ----------------------------------
  // **** Death Card container

  deathContent += "<div id=\"death-container\">"; // Fill death with default current cover

  deathContent += deathStateCurrentContent(); // close death card

  deathContent += "</div></div>\n    <div class=\"space v-large\"><!-- SPACER! --></div>"; // close death card

  deathContent += "</div></div>\n    <div class=\"space v-large\"><!-- SPACER! --></div>";
  return deathContent;
}