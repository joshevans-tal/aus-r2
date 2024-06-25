"use strict";

/*
// -----------------------------------------------------------------------------------------------------------------
//  TC FORM QUESTION component - by Josh Evans
// -----------------------------------------------------------------------------------------------------------------

*/
function tcFormQuestion2(question) {
  console.log("im tcFormQuestion2");
}

;

function tcFormQuestion(label, type, id, action, tooltip) {
  var content = "";
  content += "\n    <div class=\"form-element\">";
  content += tcLabel(label, "".concat(id, "-form"), tooltip);
  content += "<input type=\"".concat(type, "\" id=\"").concat(id, "-form\" name=\"email\" ").concat(action, ">\n    </div>\n    ");
  return content;
}

;
var inputTypeSelect = "<div class=\"value \">\n<div class=\"select-wrapper\"> \n    <select class=\"tc-select\" id=\"aus-resident\" name=\"aus-resident\">\n    <option value=\"volvo\">Unemployed</option>\n    <option value=\"saab\">Casual</option>\n    <option value=\"fiat\">Part time</option>\n    <option value=\"audi\">Full time</option>\n    <option value=\"fiat\">Retired</option>\n    <option value=\"audi\">Home duties</option>\n  </select>\n</div>";
var inputTypeText = "<input type=\"".concat(type, "\" id=\"").concat(id, "-form\" name=\"email\" ").concat(action, ">");