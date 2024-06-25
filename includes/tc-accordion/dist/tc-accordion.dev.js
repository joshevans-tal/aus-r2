"use strict";

// -----------------------------------------------------------------------------------------------------------------
// ACCORDION COMPONENT - By josh evans
// -----------------------------------------------------------------------------------------------------------------
function tcAccordion(btn, content) {
  // console.log(`${btn} ${content}`);
  // // accordion button
  // let accordion = `<button class="tc-accordion">${btn}</button>`;
  // // accordion panel
  // accordion += `<div class="tc-panel">${content}</div>`;
  var accordion = "\n    <div class=\"tc-accordion cover-item\">".concat(btn, "</div>\n        <div class=\"tc-panel cover-item\">\n        ").concat(content, "\n        </div>"); // return to caller

  return accordion;
} // ADD LISTENERS TO ALL ACCORDION ELEMENTS


function addAccordionListener() {
  var acc = document.getElementsByClassName("tc-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var tcpanel = this.nextElementSibling;

      if (tcpanel.style.maxHeight) {
        tcpanel.style.maxHeight = null;
      } else {
        tcpanel.style.maxHeight = tcpanel.scrollHeight + "px";
      }
    });
  }
}
/*

<div class="accordion">
<span class="accordion-label">
<img src="./images/icons/ic-plus.svg" style="height: 24px;">
Death Cover
</span>
<span class="cover-sum"> $311,000.00</span>
</div>

*/