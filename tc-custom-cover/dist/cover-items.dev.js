"use strict";

function createCoverItem() {
  // !!! requires utilities.js 
  var value = 260000;
  var str = "<div class=\"row\">";
  str += "<span class=\"label\">";
  str += "<img src=\"../images/icons/indent-arrow.svg\" class=\"sub-icon\" />";
  str += "<a onclick=\"dictionary('text');\">Fixed Cover</a>";
  str += "</span>";
  str += "<span class=\"cover-value\">".concat(formatCurrency(value), "</span>");
  str += "</div>"; // document.getElementById(id).innerHTML = str;

  return str;
} // id, label, coverType, value