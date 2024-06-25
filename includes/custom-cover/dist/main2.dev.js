"use strict";

var _deathEdit = require("./death-edit.js");

// import { add } from './mathUtils.js';
document.getElementById('test').innerHTML = '<button id="death-btn">death</button>'; // document.getElementById('addButton').addEventListener('click', function() {
// //   const input1 = document.getElementById('input1').value;
// //   const input2 = document.getElementById('input2').value;
// //   const result = add(Number(input1), Number(input2));
// //   document.getElementById('result').textContent = `Result: ${result}`;
//   document.getElementById('test').innerHTML = ""
// });

document.getElementById('death-btn').addEventListener('click', function () {
  document.getElementById('test').innerHTML = (0, _deathEdit.buildDeath)();
  document.getElementById('test-div').addEventListener('click', function () {
    // window.alert('Well well');
    death2();
  });
});

function death1() {
  document.getElementById('test-div').innerHTML = (0, _deathEdit.buildDeath)();
  document.getElementById('test-div').addEventListener('click', function () {
    death2();
  });
}

function death2() {
  document.getElementById('test-div').innerHTML = (0, _deathEdit.triggerDeath)();
  document.getElementById('test-div').addEventListener('click', function () {
    death1();
  });
}