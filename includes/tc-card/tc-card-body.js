// Init vars
// let containerid = "card-01-body";
let cardContent = "Add card content here!";

// create card header
function createCardContent(content, id){

    // update vars
    containerid = id;
    cardContent = content;

    let str = `<div class="card-body">${cardContent}</div>`;

    // document.getElementById(id).innerHTML = str;
    document.getElementById(containerid).insertAdjacentHTML(
        "beforeend",
        str,
      );

}


// <!-- CARD HEADER -->
// <div id="card-01-body" class="card-body"></div>