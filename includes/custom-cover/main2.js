// import { add } from './mathUtils.js';
import { buildDeath, triggerDeath } from './death-edit.js';

document.getElementById('test').innerHTML = '<button id="death-btn">death</button>';

// document.getElementById('addButton').addEventListener('click', function() {
// //   const input1 = document.getElementById('input1').value;
// //   const input2 = document.getElementById('input2').value;
// //   const result = add(Number(input1), Number(input2));
// //   document.getElementById('result').textContent = `Result: ${result}`;
//   document.getElementById('test').innerHTML = ""
// });


document.getElementById('death-btn').addEventListener('click', function() {
    
    document.getElementById('test').innerHTML = buildDeath();

    document.getElementById('test-div').addEventListener('click', function() {

        // window.alert('Well well');
        death2();
      });
  });
  
  function death1(){
    document.getElementById('test-div').innerHTML = buildDeath();

    document.getElementById('test-div').addEventListener('click', function() {
        death2();
      });

  }

  function death2(){
    document.getElementById('test-div').innerHTML = triggerDeath();

    document.getElementById('test-div').addEventListener('click', function() {
        death1();
      });

  }