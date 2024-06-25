"use strict";

function hideShow(hideId, showId) {
  var hideMe = document.getElementById(hideId);
  var showMe = document.getElementById(showId);
  showMe.style.display = "block";
  hideMe.style.display = "none";
}