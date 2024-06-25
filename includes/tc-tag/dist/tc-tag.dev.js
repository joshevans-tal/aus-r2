"use strict";

// TC TAG - By Josh Evans
function tcTag(str, status) {
  var content = ""; // window.alert(`I'm a needy tag!`);

  content += "<span class=\"tc-tag ".concat(status, "\">").concat(str, "</span>");
  return content;
}