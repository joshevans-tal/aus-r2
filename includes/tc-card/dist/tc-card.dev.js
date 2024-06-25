"use strict";

// Init vars
// idName, headStyle, cardTitle, cardSub, subAction
var id = "";
var cardTitle = "Card title";
var cardSub = "sub title";
var cardSubOnClick = "modal event";
var headStyle = "default";
var cardContent = "Default content included";
var cardFooter = "</div></div>";
/*

tcCard()
tcCardAction{}
tcCardHeadless{}

1. Card types
    - default √
    - action √ included
    - headless 

2. Style
    - default √
    - bglight √

3. References
    - [x] take a prefix to create ids √
    - container id √
    - head id √
    - body id √
    RESULT eg. "death-card-container" "death-card-head" "death-card-body"

4. Handle body content
    - ??? perhaps this is empty
    - ??? how will footers work?


------------------------------------------------------------------------
??????????????????|---  COMPONENT USAGE  ---|??????????????????

function tcCard(idName, headStyle, cardTitle, cardSub, subAction,action)
idName............... string: give the card content container an id that can be referenced to populate content
headStyle............ string: 'default'is high contrast 'bglight' is low contrast
cardTitle............ string: Card title text
cardSub.............. string: Education/sub text - Alternatively 'hide' will hide this completely
subAction............ string: javascript string added to cardSub text – eg onclick="${subAction}"
action............... string: Usually a small button but not defined. Location, top right of card.
                      SUGGEST > <button class='secondary danger btn-action' onclick="window.alert('Cancel this')">Cancel</button>

EXAMPLE: 
tcCard(
        `death-current`,
        `bglight`,
        `Your current Death benefit is:`,
        `hide`,
        `window.alert('Education content about cover types')`,
        `<button class='secondary danger btn-action' onclick="window.alert('Cancel this')">Cancel</button>`
        );
*/

function tcCard(idName, headStyle, cardTitle, cardSub, subAction, action, cardFooter) {
  // ---------------------------------------------------------------------
  // 01  |||  INIT VARS
  // ---------------------------------------------------------------------
  var bgClass;
  var infoClass;
  var eduText;
  console.log("cardFooter: ".concat(cardFooter)); // ---------------------------------------------------------------------
  // 02  |||  CHECK REQUESTED CARD STYLE
  // ---------------------------------------------------------------------
  // If default -> High contrast treatment

  switch (headStyle) {
    case "bglight":
      bgClass = "card-sub";
      infoClass = "info";
      break;

    default:
      bgClass = "card-sub on-inverse";
      infoClass = "info icon-on-inverse";
  } // ---------------------------------------------------------------------
  // 03  |||  CHECK IF EDUCATION SHOULD BE HIDDEN
  // ---------------------------------------------------------------------
  // Hide education if cardSub == 'hide'


  switch (cardSub) {
    case "hide":
      infoClass = "";
      eduText = "</div>"; // console.log("HIDE MEEEE!!!!! - switch");

      break;

    default:
      // console.log("I don't need to be hidden - switch");
      infoClass = "".concat(infoClass);
      eduText = "<a href=\"#\" \n                onclick=\"".concat(subAction, "\" \n                class=\"").concat(bgClass, "\">\n                <p class=\"").concat(infoClass, "\">").concat(cardSub, "</p>\n            </a></div>");
  } // ---------------------------------------------------------------------
  // 04  |||  CREATE CREATE CARD CONTENT TO RETURN
  // ---------------------------------------------------------------------


  var myCard = "<div id=\"".concat(idName, "-card-container\">\n                    <div class=\"tc-card\">"); // CARD HEADER

  myCard += "\n    <div id=\"".concat(idName, "-card-head\"class=\"card-header ").concat(headStyle, "\">\n        <div class=\"card-head-flex-container\">\n            <span class=\"heading5\">").concat(cardTitle, "</span>\n            ").concat(action, "\n        </div>"); // DISPLAY EDUCATION

  myCard += "".concat(eduText); // // CARD BODY
  // myCard += `<div 
  //             id="${idName}-card-body"
  //             class="card-body">
  //             </div>`;
  // END CARD

  switch (cardFooter) {
    case '':
      myCard += "<div \n            id=\"".concat(idName, "-card-body\"\n            class=\"card-body\">\n            </div>\n            <div class=\"card-footer footerNull\"></div>\n            </div>");
      break;

    case undefined:
      myCard += "<div \n            id=\"".concat(idName, "-card-body\"\n            class=\"card-body\">\n            </div>\n            <div class=\"card-footer footerNull\"></div>\n            </div>");
      break;

    default:
      myCard += "<div \n        id=\"".concat(idName, "-card-body\"\n        class=\"card-body\">\n        </div>\n        <div id=\"").concat(idName, "-card-footer\"class=\"card-footer bglight\">").concat(cardFooter, "</div>\n        </div>");
  }

  return myCard;
} //  XXXXXXXX!!!!!!XXXXXXXXXXX!!!!!!!XXXXXXXXX!!!!!!!!XXXXXXXX!!!!!!!
// ---------------------------------------------------------------------
// !!!!!  THESE FUNCTIONS WILL ARE DEPRECATED - DO NOT USE  !!!!!
// ---------------------------------------------------------------------
// create card header


function createCardHeader(title, sub, subClick, style) {
  // update vars
  cardTitle = title;
  cardSub = sub;
  cardSubOnClick = subClick;
  headStyle = style; // Format string to return

  var str = "<div class=\"card-header ".concat(style, "\">\n    <span class=\"heading5\">").concat(cardTitle, "</span><br>\n    <a href=\"#\" onclick=\"").concat(cardSubOnClick, "\" class=\"on-inverse\">\n    <p class=\"info icon-on-inverse\">").concat(cardSub, "</p>\n    </a></div>"); // send html back to caller

  return str;
} // create card header


function createCardHeaderAction(title, sub, subClick, style, action) {
  // update vars
  cardTitle = title;
  cardSub = sub; // this will accept onclick javascript code for the info/education action

  cardSubOnClick = subClick; // Used to select low contrast vs high contrast actions

  headStyle = style; // Format string to return

  var str = "<div class=\"card-header ".concat(style, "\">\n    <div class=\"card-head-flex-container\">\n    <span class=\"heading5\">").concat(cardTitle, "</span>\n    ").concat(action, "</div>\n    <a href=\"#\" onclick=\"").concat(cardSubOnClick, "\">\n    <p class=\"info\">").concat(cardSub, "</p>'\n    </a></div>"); // send html back to caller

  return str;
} // create card header


function createCardBody(content) {
  // update vars
  // if(content){
  cardContent = content; // }
  // Format string to return

  var str = "<div class=\"card-body\">".concat(cardContent, "</div>"); // send html back to caller

  return str;
} // === JAVASCRIPT

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