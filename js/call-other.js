// import { hideShow } from "./hide-show";

let cardbodyid1 = "element-01";
let cardbody1 = `<div id="card-01-body" class="card-body"></div>`;
let cardbodyid2 = "element-02";
let cardbody2 = `<div id="card-01-body" class="card-body"></div>`;


// CURRENT COVER!!
// --------------------------------------

function currentcover(){
    // create inner card header
    createCustomCardHeader(
    "Your current death benefit is:", // title
    "Learn about Death cover",  // subhead (with learning action)
    "hideShow('element-01','element-02');", // action on learning links
    "bglight", // add style to header
    cardbodyid1, // create at element id in DOM
    `<button 
    class='secondary btn-action danger' 
    onclick='cancelCover("element-01","element-02","Death")'
    >Cancel</button>`); // Add special cta into header eg. Cancel, reset etc. Include full button code. 
    
    // document.getElementById("element-01").appendChild
    createCardContent(`
        ${createCoverItemDefault("Death","Fixed",261000,"sub")}
        ${createCoverItemSub("Death","Age-based",261000,"sub")}
        ${createCoverItemTotal("Monthly Premium",82.52,"/mth")}`,
        "element-01");
    // onclick="hideShow('element-01','element-02');" 
    
}

// EDIT COVER!!
// --------------------------------------

function editcoverfixed(){
    createCardHeader("Edit your cover", "This is a sub head", "hideShow('element-02','element-01');", "bglight", cardbodyid2);
    // document.getElementById("element-01").appendChild
    createCardContent(`<h2>Heading</h2></<p>This is some content</p>`, "element-02");
    // onclick="hideShow('element-01','element-02');" 
    
}

// CANCEL COVER!!
// --------------------------------------

function cancelCover(hide,show,product){

    hideShow(hide,show);
    createCustomCardHeader(`You are cancelling your ${product} cover`, 
    'This is a sub head', 
    `hideShow('${show}','${hide}');`, 
    'bglight', 
    cardbodyid2,
    `<button class='secondary btn-action danger' onclick='hideShow("${show}","${hide}");'>Reset</button>`);
   
    createCardContent(`
        <p>Warning, you are cancelling your ${product} cover. This cannot be undone</p>${createInlineAlert('This is an inline alert')}`,
        show);
    // onclick="hideShow('element-01','element-02');"

}

// createCardHeader("Heading 02", "This is a call other ", "bglight", "", "element-02");
currentcover();
editcoverfixed();


// export default callother;