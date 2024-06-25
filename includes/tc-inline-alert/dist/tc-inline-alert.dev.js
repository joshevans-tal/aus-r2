"use strict";

var alertMessage = "Unfortunately, we are unable to display this alert.";

function createInlineAlert(message, status) {
  var statusIcon = "";
  var state = "";

  switch (status) {
    case 'warning':
      statusIcon = "<img src=\"../../images/icons/ic-warning.svg\" width=\"24px\" />";
      state = "warning-icon";
      break;

    case 'danger':
      statusIcon = "<img src=\"../../images/icons/ic-warning.svg\" width=\"24px\" />";
      state = "danger-icon";
      break;

    default:
      statusIcon = "<img src=\"../../images/icons/ic-info-circle.svg\" width=\"24px\" />";
      state = "info";
  }

  alertMessage = "<div class=\"tc-inline-alert make-flex row ".concat(state, "\">\n                    ").concat(message, "\n                    </div>");
  return alertMessage;
}

;
/*
alertMessage = `<div class="tc-inline-alert make-flex row ${state}">
                    <span>${statusIcon}</span>${message}
                    </div>`;

*/