"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDeath = buildDeath;
exports.triggerDeath = triggerDeath;

var _subSubTest = require("./sub-sub-test.js");

// import { death2 } from './main.js';
function buildDeath() {
  (0, _subSubTest.subTest)();
  return "<div id='test-div'>test</div>"; // creates test which is given a listener in main.js
}

function triggerDeath() {
  // OUTER DEATH/TPD COVER CARD
  // card header - Title, sub, onclick js, style, element id, action
  createCardHeader("Death cover", "About Deathcover", "window.alert('Education about DEAATH')", "default", "card-container", "Reset");
  return "<div id='test-div'>test trigger</div>"; // creates test which is given a listener in main.js
} // Export the functions
// card-container