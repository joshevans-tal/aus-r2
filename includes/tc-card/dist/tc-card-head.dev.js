"use strict";

// Init vars
var cardTitle = "Card title";
var cardSub = "sub title";
var cardSubOnClick = "modal event";
var headStyle = "default"; // create card header

function createCardHeader(title, sub, subClick, style, id) {
  // update vars
  cardTitle = title;
  cardSub = sub;
  cardSubOnClick = subClick;
  headStyle = style;
  var str = "<div class=\"card-header ".concat(style, "\">\n    <span class=\"heading5\">").concat(cardTitle, "</span><br>\n    <a href=\"#\" onclick=\"").concat(cardSubOnClick, "\" class=\"on-inverse\">\n    <p class=\"info icon-on-inverse\">").concat(cardSub, "</p>\n    </a></div>");
  document.getElementById(id).innerHTML = str; // return str;
} // create card header


function createCustomCardHeader(title, sub, subClick, style, id, action) {
  // update vars
  cardTitle = title;
  cardSub = sub; // this will accept onclick javascript code for the info/education action

  cardSubOnClick = subClick; // Used to select low contrast vs high contrast actions

  headStyle = style;

  if (style == "bglight") {
    var str = "<div class=\"card-header ".concat(style, "\">\n        <div class=\"card-head-flex-container\">\n        <span class=\"heading5\">").concat(cardTitle, "</span>\n        ").concat(action, "</div>\n        <a href=\"#\" onclick=\"").concat(cardSubOnClick, "\">\n        <p class=\"info\">").concat(cardSub, "</p>'\n        </a></div>");
    document.getElementById(id).innerHTML = str;
  } else {
    var _str = '<div class="card-header ' + style + '">';

    _str += '<div class="card-head-flex-container">';
    _str += '<span class="heading5">' + cardTitle + '</span>';
    _str += '<button class="secondary btn-action danger" >Get started</button>';
    _str = +'</div>';
    _str += '<a href="#" onclick="' + cardSubOnClick + '" class="on-inverse">';
    _str += '<p class="info icon-on-inverse">' + cardSub + '</p>';
    _str += '</a></div>';
    document.getElementById(id).innerHTML = _str;
  } // ADD THIS TO YOUR HTML PAGE
  // === HTML

  /*
  <!-- CARD HEADER -->
  <div class="card-header">
  <span class="heading5">Current cover</span>
  <a href="" class="on-inverse">
      <p class="info icon-on-inverse">Learn about current cover</p>
  </a>
  </div>
  */
  // === JAVASCRIPT

  /*
  <script>
  // COVER CARD
          // card header - Title, sub, onclick js, style, element id, action
          createCardHeader(
              "TPD & Death cover",
              "About Death & TPD cover",
              "window.alert('Education about how these cover types work')",
              "bglight",
              "card-01-header",
          );
           // CUSTOM DEATH CARD
          // card header - Title, sub, onclick js, style, element id, action
          createCustomCardHeader(
              "Death cover",
              "Learn more about your cover types",
              "window.alert('Education about how these cover types work')",
              "bglight",
              "custom-death-current-header",
              "<button class='secondary btn-action danger' >Cancel</button>"
          );
  </script>
  */

}