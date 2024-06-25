function createPercBar(){
   let content = `
<div id="perc-container">
    <div id="perc-display">
        <div class="perc-labels">
            <span class="circ num1">•</span>
            <span id="num1-txt">43%</span>
        </div>
        <div class="perc-labels">
            <span id="num2-txt">43%</span>
            <span class="circ num2">•</span>
        </div>
    </div>
</div>

    <div id="tc-perc-container">
      <div id="num1" class="num1"></div>
      <div id="num2" class="num2"></div>
    </div>
`;

return content;
}


function changePerc(num1, num2) {
console.log(`num1: ${num1} \nnum2: ${num2}`);
let percent = ((num1 / (num1 + num2)) * 100) | 0;
num1Label = `Basic | ${100 - percent}%`;
num2Label = `${percent}% | Fixed`;

// let perc;
if(num1 === 0 && num2 === 0){
  percent = 50;
  num1Label = `no cover`;
  num2Label = `no cover`;
  console.log(`they were both 0 0 `);
}
//   perc = percent | 0; // Use | 0; bitwise operator to truncate float to int
  
  // cover 2 - Age-based
  document.getElementById("num1").style.width = `${100 - percent}%`;
  document.getElementById("num1-txt").innerHTML = num1Label; //`Basic | ${100 - perc}%`;
  // cover 2 - Fixed
  document.getElementById("num2").style.width = `${percent}%`;
  document.getElementById("num2-txt").innerHTML = num2Label; //`${perc}% | Fixed`;
}

// let fixed = 550000;
// let agedbased = 184000;
// // let coverperc = (fixed / (fixed + agedbased)) * 100;

// changePerc(fixed, agedbased); // based on fixed amount
