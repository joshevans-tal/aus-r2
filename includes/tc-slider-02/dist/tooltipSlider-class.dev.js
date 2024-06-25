"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

    this.tooltipFormatter = options.tooltipFormatter || function (value) {
      return "".concat(value);
    }; // Default formatter

  } // init() {
  //     const container = document.getElementById(this.id);
  //     container.innerHTML = this.sliderHTML();
  //     const slider = container.querySelector(`input[type="range"]`);
  //     slider.addEventListener('input', this.updateValue.bind(this));
  //     // Initialize the tooltip
  //     this.tooltip = container.querySelector('.tooltip');
  //     this.showTooltip(); // Show tooltip initially
  // }


  _createClass(SliderComponent, [{
    key: "init",
    value: function init() {
      var _this = this;

      var container = document.getElementById(this.id);
      container.innerHTML = this.sliderHTML();
      var slider = container.querySelector("input[type=\"range\"]");
      slider.addEventListener('input', this.updateValue.bind(this)); // Initialize the tooltip

      this.tooltip = container.querySelector('.tooltip'); // Ensure DOM elements are fully rendered before showing tooltip

      requestAnimationFrame(function () {
        return _this.showTooltip();
      });
    }
  }, {
    key: "sliderHTML",
    value: function sliderHTML() {
      return "\n            <div class=\"slider-container\" style=\"position: relative;\">\n                <input type=\"range\" class=\"slider\" min=\"".concat(this.min, "\" max=\"").concat(this.max, "\" value=\"").concat(this.value, "\" step=\"").concat(this.step, "\" />\n                <span class=\"tooltip\" style=\"position: absolute; display: none; bottom: 100%;\">").concat(this.tooltipFormatter(this.value), "</span>\n            </div>\n        ");
    }
  }, {
    key: "updateValue",
    value: function updateValue(event) {
      this.value = event.target.value;
      this.showTooltip();
    } // showTooltip() {
    //     this.tooltip.innerText = this.tooltipFormatter(this.value);
    //     this.tooltip.style.display = 'inline-block';
    //     const slider = document.querySelector(`#${this.id} .slider`);
    //     const sliderRect = slider.getBoundingClientRect();
    //     const tooltipRect = this.tooltip.getBoundingClientRect();
    //     const sliderValue = (this.value - this.min) / (this.max - this.min);
    //     const tooltipPosition = sliderValue * (sliderRect.width - tooltipRect.width) +
    //                             sliderRect.left - tooltipRect.left -
    //                             (window.pageXOffset || document.documentElement.scrollLeft);
    //     this.tooltip.style.left = `${tooltipPosition}px`;
    // }

  }, {
    key: "showTooltip",
    value: function showTooltip() {
      var slider = document.querySelector("#".concat(this.id, " .slider"));
      var sliderRect = slider.getBoundingClientRect();
      var percent = (this.value - this.min) / (this.max - this.min) * 100;
      var tooltipWidth = this.tooltip.offsetWidth / 2; // Half the tooltip width for centering

      var sliderWidth = slider.offsetWidth; // Calculate offset for tooltip to center it above the handle

      var offset = percent * sliderWidth / 100 - tooltipWidth; // Adjust for initial rendering

      offset = Math.max(offset, 0); // Prevent negative offset, ensures within slider bounds

      offset = Math.min(offset, sliderWidth - 2 * tooltipWidth); // Prevent overflow, ensures within slider bounds

      this.tooltip.style.left = "".concat(offset, "px");
      this.tooltip.innerText = this.tooltipFormatter(this.value);
      this.tooltip.style.display = 'inline-block';
    }
  }]);

  return SliderComponent;
}();