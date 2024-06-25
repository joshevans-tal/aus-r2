"use strict";

function tcTooltip(txt, tooltip) {
  var content = "";
  content += "<div class=\"tc-tooltip\">".concat(txt, "<span class=\"tc-tooltiptext\">").concat(tooltip, "</span></div>");
  return content;
}

var tExists = false;

function myTooltip(sender, txt) {
  var myPos = sender.getBoundingClientRect();

  if (tExists == false) {
    // Create element:
    var para = document.createElement("div");
    para.innerHTML = "<span id='close-tooltip'>\u2013</span><p class='small'>".concat(txt, "</p>");
    para.id = "tooltip";
    para.classList.add('tooltiptest'); // Append to body:

    document.body.appendChild(para); // update position:

    para.style.left = "".concat(myPos.left - 32, "px");
    para.style.top = "".concat(myPos.top + window.scrollY - para.offsetHeight - 4, "px");

    para.onclick = function () {
      removeTooltip(para);
    };

    tExists = true;
  } else {
    var _para = document.getElementById("tooltip");

    _para.remove();

    tExists = false;
  }
}

function removeTooltip(id) {
  id.remove();
  tExists = false;
}