// import { hideShow } from "./hide-show";

let cardbodyid1 = "element-01";
let cardbody1 = `<div id="card-01-body" class="card-body"></div>`;
let cardbodyid2 = "element-02";
let cardbody2 = `<div id="card-01-body" class="card-body"></div>`;


function currentcover(){
    createCustomCardHeader("Heading 01-yep", "This is a sub head", "hideShow('element-01','element-02');", "bglight", cardbodyid1,"");
    // document.getElementById("element-01").appendChild
    createCardContent(`<h2>Heading</h2></<p>This is some content</p>`, "element-01");
    // onclick="hideShow('element-01','element-02');" 
    
}

function editcoverfixed(){
    createCardHeader("Edit your cover", "This is a sub head", "hideShow('element-02','element-01');", "bglight", cardbodyid2);
    // document.getElementById("element-01").appendChild
    createCardContent(`<h2>Heading</h2></<p>This is some content</p>`, "element-02");
    // onclick="hideShow('element-01','element-02');" 
    
}

// createCardHeader("Heading 02", "This is a call other ", "bglight", "", "element-02");
currentcover();
editcoverfixed();


// export default callother;