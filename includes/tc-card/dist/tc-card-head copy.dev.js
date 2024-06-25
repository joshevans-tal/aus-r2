"use strict";

// Init vars
var cardContent = "Add card content here!"; // create card header

function createCardHeader(content, id) {
  // update vars
  cardContent = content;
  var str = cardContent;
  document.getElementById(id).innerHTML = str;
} // <!-- CARD HEADER -->
// <div id="card-01-body" class="card-body"></div>