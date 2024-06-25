import { config } from "./config.js";

function setUIState(demo) {
  const demoConfig = config[demo];
  if (demoConfig) {
    document.getElementById("firstName").textContent = demoConfig.firstName;
    document.getElementById("lastName").textContent = demoConfig.lastName;
    document.getElementById("age").textContent = demoConfig.age;
  }
}

window.onload = function () {
  setUIState("demo3"); // change this to switch between demos
//   console.log(demoConfig);
};

function changeState(state){
    setUIState(state);
}


function test(id){
    window.alert("yo!");
    setUIState(id);
}

test();

let str = `<a href="#" onclick="test('demo1');">Demo 1</a><br>
<a href="#" onclick="test('demo2');">Demo 2</a><br>
<a href="#" onclick="test('demo3');">Demo 3</a><br>`;

document.getElementById("test").innerHTML =  str;


export default test;