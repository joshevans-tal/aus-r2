"use strict";

// Slider data configuration
var sliderConfig = {
  min: 0,
  max: 1000000,
  step: 1000
}; // Function to initialize a slider

function createSlider(containerId, config) {
  var container = document.getElementById(containerId);

  if (!container) {
    console.error('Slider container not found');
    return;
  } // Create the slider input


  var slider = document.createElement('input');
  slider.setAttribute('type', 'range');
  slider.setAttribute('min', config.min);
  slider.setAttribute('max', config.max);
  slider.setAttribute('step', config.step);
  slider.setAttribute('value', config.min);
  slider.className = 'slider'; // Create the tooltip

  var tooltip = document.createElement('div');
  tooltip.className = 'slider-tooltip';
  tooltip.textContent = formatCurrency(slider.value); // Create min and max labels

  var minLabel = document.createElement('div');
  minLabel.className = 'label min-label';
  minLabel.textContent = formatCurrency(config.min);
  var maxLabel = document.createElement('div');
  maxLabel.className = 'label max-label';
  maxLabel.textContent = formatCurrency(config.max); // Append elements to the container

  container.appendChild(slider);
  container.appendChild(tooltip);
  container.appendChild(minLabel);
  container.appendChild(maxLabel); // Update tooltip on slider change

  slider.addEventListener('input', function () {
    tooltip.textContent = formatCurrency(slider.value);
    updateTooltipPosition(slider, tooltip);
  }); // Initial tooltip position update

  updateTooltipPosition(slider, tooltip);
} // Function to update tooltip position
// function updateTooltipPosition(slider, tooltip) {
//     const sliderRect = slider.getBoundingClientRect();
//     const tooltipRect = tooltip.getBoundingClientRect();
//     const left = sliderRect.left + (slider.value - slider.min) / (slider.max - slider.min) * (sliderRect.width - tooltipRect.width);
//     tooltip.style.left = left + 'px';
// }
// Function to update tooltip position


function updateTooltipPosition(slider, tooltip) {
  var sliderRect = slider.getBoundingClientRect();
  var tooltipRect = tooltip.getBoundingClientRect(); // Calculate the percentage position of the slider handle

  var sliderValueRatio = (slider.value - slider.min) / (slider.max - slider.min); // Calculate the left position of the slider handle

  var sliderHandleLeft = sliderValueRatio * sliderRect.width; // Calculate the center position for the tooltip

  var tooltipLeft = sliderRect.left + sliderHandleLeft - tooltipRect.width / 2; // Apply the calculated left position to the tooltip

  tooltip.style.left = "".concat(tooltipLeft, "px");
} // Function to format values as currency with commas


function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(value);
}
/* INCLUDE ON PAGE SO YOU CAN CALL MULTIPLE SLIDERS */
// // Initialize sliders on page load
// document.addEventListener('DOMContentLoaded', () => {
//     createSlider('slider1', sliderConfig);
//     // Call createSlider for other sliders with different IDs and configurations
// });