// ---------------------------
// SLIDER CLASS
// ---------------------------
class SliderComponent {
    constructor(options) {
        this.id = options.id;
        this.min = options.min;
        this.max = options.max;
        this.value = options.value;
        this.step = options.step || 1; // Default step value to 1 if not provided
        this.updateTarget = options.updateTarget; // ID of the element to update with slider value
        this.onValueChange = options.onValueChange; // Callback function for value change
    }

    init() {
        const container = document.getElementById(this.id);
        container.innerHTML = this.sliderHTML();

        const slider = container.querySelector(`input[type="range"]`);
        slider.addEventListener('input', this.updateValue.bind(this));

        // Bind external input update if specified
        if (this.updateTarget) {
            const targetEl = document.getElementById(this.updateTarget);
            if (targetEl && targetEl.tagName.toLowerCase() === 'input') {
                targetEl.addEventListener('input', this.setValueFromExternalInput.bind(this));
            }
        }

        this.updateDisplay(this.value);
    }

    sliderHTML() {
        return `<input type="range" class="slider" min="${this.min}" max="${this.max}" value="${this.value}" step="${this.step}" />`;
    }

    updateValue(event) {
        this.value = event.target.value;
        this.updateDisplay(this.value);
    }

    updateDisplay(value) {
        if (this.updateTarget) {
            const targetEl = document.getElementById(this.updateTarget);
            if (targetEl) {
                targetEl.innerText = value;
                if (targetEl.tagName.toLowerCase() === 'input') {
                    targetEl.value = value;
                }
            }
        }

        // Trigger the callback function if it's defined
        if (this.onValueChange && typeof this.onValueChange === 'function') {
            this.onValueChange(value);
        }
    }

    setValueFromExternalInput(event) {
        this.value = event.target.value;

        // Update the slider position
        const slider = document.getElementById(this.id).querySelector(`input[type="range"]`);
        if (slider) {
            slider.value = this.value;
        }

        // Update display and trigger any callbacks
        this.updateDisplay(this.value);
    }
}


// ------------------------------
// 
// ------------------------------

// Define options for the slider
const sliderOptions = {
    id: 'slider-container',
    min: 0,
    max: 5000000,
    value: 360000,
    step: 10000,
    updateTarget: 'external-input', // Use external input field as the update target
    onValueChange: (value) => {
        // Update other HTML elements with the slider value
        document.getElementById('display-value').innerText = value;
        document.getElementById('another-display').innerText = `Value is now: ${value}`;
    }
};

// Create and initialize the slider
const mySlider = new SliderComponent(sliderOptions);
mySlider.init();
