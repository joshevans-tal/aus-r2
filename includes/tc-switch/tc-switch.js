function tcSwitch(id, labelLeft, labelRight, round, isChecked){
/*

    id...... applied to check box and used to reference in other scripts
    labels.. applied left and right if not empty strings
    round... bool. If true, applies round style to switch.

*/
// console.log(isChecked);


let sliderStyle = "round";
if (round=== false){
    sliderStyle = "";
}

let switchHTML = `<span class="tc-switch-labelwrap">`;

if (labelLeft != ""){
    // switchHTML += `<label for="round2">${labelLeft}</label>`;
    switchHTML += `<label for="${id}" >${labelLeft}</label>`;
}

switch(isChecked){
    case "checked":
        switchHTML += `<label for="${id}" class="tc-switch" >
        <input type="checkbox" id="${id}" name="${id}" checked>
        <span class="tc-switch-background ${sliderStyle}"></span>
        </label>`;
    break;
    default:
        switchHTML += `<label for="${id}" class="tc-switch" >
        <input type="checkbox" id="${id}" name="${id}" >
        <span class="tc-switch-background ${sliderStyle}"></span>
        </label>`;
}


if (labelRight != ""){
    switchHTML += `<label for="${id}">${labelRight}</label>`;
}

switchHTML += `</span>`;

return switchHTML;
}

function tcSwitchSquare(){
// 
}




{/* <span class="tc-switch-labelwrap">
<label for="round2">Don't include</label>
<label class="tc-switch">
    <input type="checkbox" checked>
    <span class="tc-switch-background round"></span>
</label>
<label for="round2">Include cover</label>
</span> 


<div class="tc-switch-labelwrap">
        <label class="tc-switch">
            <input type="checkbox" id="square2" checked>
            <span class="tc-switch-background"></span>
        </label>
        <label for="square2">This is a label</label>
    </div>

*/}