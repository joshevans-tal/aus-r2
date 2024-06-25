"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subTest = subTest;

function subTest() {
  // OUTER DEATH/TPD COVER CARD
  // card header - Title, sub, onclick js, style, element id, action
  createCardHeader("This is like, totally a sub!", "About Death & TPD cover", "window.alert('This is ')", "default", "card-container", "Cancel");
}