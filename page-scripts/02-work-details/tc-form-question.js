/*
// -----------------------------------------------------------------------------------------------------------------
//  TC FORM QUESTION component - by Josh Evans
// -----------------------------------------------------------------------------------------------------------------

*/

function tcFormQuestion2(question){

    console.log("im tcFormQuestion2");
    
};

function tcFormQuestion(label, type, id, action, tooltip){

    let content = ``;
    
    content += `
    <div class="form-element">`
    content += tcLabel(label,`${id}-form`,tooltip);
    content += `<input type="${type}" id="${id}-form" name="email" ${action}>
    </div>
    `;

    return content;
};


let inputTypeSelect = `<div class="value ">
<div class="select-wrapper"> 
    <select class="tc-select" id="aus-resident" name="aus-resident">
    <option value="volvo">Unemployed</option>
    <option value="saab">Casual</option>
    <option value="fiat">Part time</option>
    <option value="audi">Full time</option>
    <option value="fiat">Retired</option>
    <option value="audi">Home duties</option>
  </select>
</div>`;

let inputTypeText = `<input type="${type}" id="${id}-form" name="email" ${action}>`;