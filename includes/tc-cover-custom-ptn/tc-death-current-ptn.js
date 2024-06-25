

function deathCurrentCover(){
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
        ${createCoverItemDefault("Death","Fixed",271000,"sub")}
        ${createCoverItemSub("Death","Age-based",261000,"sub")}
        ${createCoverItemTotal("Mooonthly premium",82.52,"/mth")}`,
        "element-01");
    // onclick="hideShow('element-01','element-02');" 
    
}



// CANCEL COVER!!
// --------------------------------------

function cancelCover(hide,show,product){
    // create inner card header
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