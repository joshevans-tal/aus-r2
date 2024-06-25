"use strict";

// Init vars
// let containerid = "card-01-body";
var cardContent = "Add card content here!"; // create card header

function createCardContent(content, id) {
  // update vars
  containerid = id;
  cardContent = content;
  var str = "<div class=\"card-body\">".concat(cardContent, "</div>"); // document.getElementById(id).innerHTML = str;

  document.getElementById(containerid).insertAdjacentHTML("beforeend", str);
} // <!-- CARD HEADER -->
// <div id="card-01-body" class="card-body"></div>