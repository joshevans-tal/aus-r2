"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ---------------------------
// SLIDER CLASS
// ---------------------------
var SliderComponent =
/*#__PURE__*/
function () {
  function SliderComponent(options) {
    _classCallCheck(this, SliderComponent);

    this.id = options.id;
    this.min = options.min;
    this.max = options.max;
    this.value = options.value;
    this.step = options.step || 1; // Default step value to 1 if not provided

    this.updateTarget = options.updateTarget; // ID of the element to update with slider value

    this.onValueChange = options.onValueChange; // Callback function for value change
  }

  _createClass(SliderComponent, [{
    key: "init",
    value: function init() {
      var container = document.getElementById(this.id);
      container.innerHTML = this.sliderHTML();
      var slider = container.querySelector("input[type=\"range\"]");
      slider.addEventListener('input', this.updateValue.bind(this)); // Bind external input update if specified

      if (this.updateTarget) {
        var targetEl = document.getElementById(this.updateTarget);

        if (targetEl && targetEl.tagName.toLowerCase() === 'input') {
          targetEl.addEventListener('input', this.setValueFromExternalInput.bind(this));
        }
      }

      this.updateDisplay(this.value);
    }
  }, {
    key: "sliderHTML",
    value: function sliderHTML() {
      return "<input type=\"range\" class=\"slider\" min=\"".concat(this.min, "\" max=\"").concat(this.max, "\" value=\"").concat(this.value, "\" step=\"").concat(this.step, "\" />");
    }
  }, {
    key: "updateValue",
    value: function updateValue(event) {
      this.value = event.target.value;
      this.updateDisplay(this.value);
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay(value) {
      if (this.updateTarget) {
        var targetEl = document.getElementById(this.updateTarget);

        if (targetEl) {
          targetEl.innerText = value;

          if (targetEl.tagName.toLowerCase() === 'input') {
            targetEl.value = value;
          }
        }
      } // Trigger the callback function if it's defined


      if (this.onValueChange && typeof this.onValueChange === 'function') {
        this.onValueChange(value);
      }
    }
  }, {
    key: "setValueFromExternalInput",
    value: function setValueFromExternalInput(event) {
      this.value = event.target.value; // Update the slider position

      var slider = document.getElementById(this.id).querySelector("input[type=\"range\"]");

      if (slider) {
        slider.value = this.value;
      } // Update display and trigger any callbacks


      this.updateDisplay(this.value);
    }
  }]);

  return SliderComponent;
}(); // ------------------------------
// 
// ------------------------------
// Define options for the slider


var sliderOptions = {
  id: 'slider-container',
  min: 0,
  max: 5000000,
  value: 360000,
  step: 10000,
  updateTarget: 'external-input',
  // Use external input field as the update target
  onValueChange: function onValueChange(value) {
    // Update other HTML elements with the slider value
    document.getElementById('display-value').innerText = value;
    document.getElementById('another-display').innerText = "Value is now: ".concat(value);
  }
}; // Create and initialize the slider

var mySlider = new SliderComponent(sliderOptions);
mySlider.init();