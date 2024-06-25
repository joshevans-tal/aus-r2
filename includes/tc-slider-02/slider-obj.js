// Trial OOP slider

const oopSlider = {
    id:'op-slider',
    style: 'switch',
    min: 0,
    max: 184000,
    step: 1000,
    value: 90000,
    get sliderHTML() {
        return `<input id="${this.id}" type="range" class="slider" min="${this.min}" max="${this.max}" value="${this.value}" />`
    } 
}



let test = oopSlider;

test.id = 'death-slider';
test.min = '0';
test.max = '3000';
test.value = test.max/3;
const deathSlider = {currentFixed: test.value};
const newValue = {newFixedBenefit: deathSlider};
console.log(`test: ${test.id}`);
console.log(`test: ${test.sliderHTML}`);

// test.min = 0;
// test.sliderHTML.max = 3000;

document.getElementById('test-container').innerHTML = test.sliderHTML;
let deathSliderFixed = document.getElementById('death-slider');
console.log(`deathSlider.currentFixed: ${deathSlider.currentFixed}`);

//----- SLIDER LISTENER -----
deathSliderFixed.addEventListener('input', function () {

    console.log(`deathSlider.value: ${this.value}`);
    console.log(`deathSlider.currentFixed: ${deathSlider.currentFixed}`);
    console.log(`newValue.newFixedBenefit: ${newValue.newFixedBenefit}`);
    
    deathSlider.currentFixed = this.value;
    
    console.log(`deathSlider.value after: ${this.value}`);
    console.log(`deathSlider.currentFixed after: ${deathSlider.currentFixed}`);
    console.log(`newValue.newFixedBenefit after: ${newValue.newFixedBenefit}`);

});


