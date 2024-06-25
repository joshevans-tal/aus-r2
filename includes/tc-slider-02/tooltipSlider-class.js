class SliderComponent {
    constructor(options) {
        this.id = options.id;
        this.min = options.min;
        this.max = options.max;
        this.value = options.value;
        this.step = options.step || 1; // Default step value to 1 if not provided
        this.tooltipFormatter = options.tooltipFormatter || ((value) => `${value}`); // Default formatter
    }

    // init() {
    //     const container = document.getElementById(this.id);
    //     container.innerHTML = this.sliderHTML();

    //     const slider = container.querySelector(`input[type="range"]`);
    //     slider.addEventListener('input', this.updateValue.bind(this));

    //     // Initialize the tooltip
    //     this.tooltip = container.querySelector('.tooltip');
    //     this.showTooltip(); // Show tooltip initially
    // }

    init() {
        const container = document.getElementById(this.id);
        container.innerHTML = this.sliderHTML();
    
        const slider = container.querySelector(`input[type="range"]`);
        slider.addEventListener('input', this.updateValue.bind(this));
    
        // Initialize the tooltip
        this.tooltip = container.querySelector('.tooltip');
        
        // Ensure DOM elements are fully rendered before showing tooltip
        requestAnimationFrame(() => this.showTooltip());
    }
    

    sliderHTML() {
        return `
            <div class="slider-container" style="position: relative;">
                <input type="range" class="slider" min="${this.min}" max="${this.max}" value="${this.value}" step="${this.step}" />
                <span class="tooltip" style="position: absolute; display: none; bottom: 100%;">${this.tooltipFormatter(this.value)}</span>
            </div>
        `;
    }

    updateValue(event) {
        this.value = event.target.value;
        this.showTooltip();
    }

    // showTooltip() {
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

    showTooltip() {
        const slider = document.querySelector(`#${this.id} .slider`);
        const sliderRect = slider.getBoundingClientRect();
        const percent = ((this.value - this.min) / (this.max - this.min)) * 100;
        const tooltipWidth = this.tooltip.offsetWidth / 2; // Half the tooltip width for centering
        const sliderWidth = slider.offsetWidth;
    
        // Calculate offset for tooltip to center it above the handle
        let offset = (percent * sliderWidth) / 100 - tooltipWidth;
    
        // Adjust for initial rendering
        offset = Math.max(offset, 0); // Prevent negative offset, ensures within slider bounds
        offset = Math.min(offset, sliderWidth - 2 * tooltipWidth); // Prevent overflow, ensures within slider bounds
    
        this.tooltip.style.left = `${offset}px`;
        this.tooltip.innerText = this.tooltipFormatter(this.value);
        this.tooltip.style.display = 'inline-block';
    }    
    
}
