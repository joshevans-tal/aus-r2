"use strict";

function deathCurrentCover() {
  // create inner card header
  createCustomCardHeader("Your current death benefit is:", // title
  "Learn about Death cover", // subhead (with learning action)
  "hideShow('element-01','element-02');", // action on learning links
  "bglight", // add style to header
  cardbodyid1, // create at element id in DOM
  "<button \n    class='secondary btn-action danger' \n    onclick='cancelCover(\"element-01\",\"element-02\",\"Death\")'\n    >Cancel</button>"); // Add special cta into header eg. Cancel, reset etc. Include full button code. 
  // document.getElementById("element-01").appendChild

  createCardContent("\n        ".concat(createCoverItemDefault("Death", "Fixed", 271000, "sub"), "\n        ").concat(createCoverItemSub("Death", "Age-based", 261000, "sub"), "\n        ").concat(createCoverItemTotal("Mooonthly premium", 82.52, "/mth")), "element-01"); // onclick="hideShow('element-01','element-02');" 
} // CANCEL COVER!!
// --------------------------------------


function cancelCover(hide, show, product) {
  // create inner card header
  hideShow(hide, show);
  createCustomCardHeader("You are cancelling your ".concat(product, " cover"), 'This is a sub head', "hideShow('".concat(show, "','").concat(hide, "');"), 'bglight', cardbodyid2, "<button class='secondary btn-action danger' onclick='hideShow(\"".concat(show, "\",\"").concat(hide, "\");'>Reset</button>"));
  createCardContent("\n        <p>Warning, you are cancelling your ".concat(product, " cover. This cannot be undone</p>").concat(createInlineAlert('This is an inline alert')), show); // onclick="hideShow('element-01','element-02');"
}