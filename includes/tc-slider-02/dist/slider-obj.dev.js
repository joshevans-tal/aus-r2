"use strict";

// Trial OOP slider
var oopSlider = {
  id: 'op-slider',
  style: 'switch',
  min: 0,
  max: 184000,
  step: 1000,
  value: 90000,

  get sliderHTML() {
    return "<input id=\"".concat(this.id, "\" type=\"range\" class=\"slider\" min=\"").concat(this.min, "\" max=\"").concat(this.max, "\" value=\"").concat(this.value, "\" />");
  }

};
var test = oopSlider;
test.id = 'death-slider';
test.min = '0';
test.max = '3000';
test.value = test.max / 3;
var deathSlider = {
  currentFixed: test.value
};
var newValue = {
  newFixedBenefit: deathSlider
};
console.log("test: ".concat(test.id));
console.log("test: ".concat(test.sliderHTML)); // test.min = 0;
// test.sliderHTML.max = 3000;

document.getElementById('test-container').innerHTML = test.sliderHTML;
var deathSliderFixed = document.getElementById('death-slider');
console.log("deathSlider.currentFixed: ".concat(deathSlider.currentFixed)); //----- SLIDER LISTENER -----

deathSliderFixed.addEventListener('input', function () {
  console.log("deathSlider.value: ".concat(this.value));
  console.log("deathSlider.currentFixed: ".concat(deathSlider.currentFixed));
  console.log("newValue.newFixedBenefit: ".concat(newValue.newFixedBenefit));
  deathSlider.currentFixed = this.value;
  console.log("deathSlider.value after: ".concat(this.value));
  console.log("deathSlider.currentFixed after: ".concat(deathSlider.currentFixed));
  console.log("newValue.newFixedBenefit after: ".concat(newValue.newFixedBenefit));
});