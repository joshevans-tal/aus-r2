"use strict";

function createPercBar() {
  var content = "\n<div id=\"perc-container\">\n    <div id=\"perc-display\">\n        <div class=\"perc-labels\">\n            <span class=\"circ num1\">\u2022</span>\n            <span id=\"num1-txt\">43%</span>\n        </div>\n        <div class=\"perc-labels\">\n            <span id=\"num2-txt\">43%</span>\n            <span class=\"circ num2\">\u2022</span>\n        </div>\n    </div>\n</div>\n\n    <div id=\"tc-perc-container\">\n      <div id=\"num1\" class=\"num1\"></div>\n      <div id=\"num2\" class=\"num2\"></div>\n    </div>\n";
  return content;
}

function changePerc(num1, num2) {
  console.log("num1: ".concat(num1, " \nnum2: ").concat(num2));
  var percent = num1 / (num1 + num2) * 100 | 0;
  num1Label = "Basic | ".concat(100 - percent, "%");
  num2Label = "".concat(percent, "% | Fixed"); // let perc;

  if (num1 === 0 && num2 === 0) {
    percent = 50;
    num1Label = "no cover";
    num2Label = "no cover";
    console.log("they were both 0 0 ");
  } //   perc = percent | 0; // Use | 0; bitwise operator to truncate float to int
  // cover 2 - Age-based


  document.getElementById("num1").style.width = "".concat(100 - percent, "%");
  document.getElementById("num1-txt").innerHTML = num1Label; //`Basic | ${100 - perc}%`;
  // cover 2 - Fixed

  document.getElementById("num2").style.width = "".concat(percent, "%");
  document.getElementById("num2-txt").innerHTML = num2Label; //`${perc}% | Fixed`;
} // let fixed = 550000;
// let agedbased = 184000;
// // let coverperc = (fixed / (fixed + agedbased)) * 100;
// changePerc(fixed, agedbased); // based on fixed amount