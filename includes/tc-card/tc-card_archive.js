// Init vars

let cardTitle = "Card title";
let cardSub = "sub title";
let cardSubOnClick = "modal event";
let headStyle = "default";
let cardContent = "Default content included";

// create card header
function createCardHeader(title, sub, subClick, style) {

    // update vars
    cardTitle = title;
    cardSub = sub;
    cardSubOnClick = subClick;
    headStyle = style;

    // Format string to return
    let str = `<div class="card-header ${style}">
    <span class="heading5">${cardTitle}</span><br>
    <a href="#" onclick="${cardSubOnClick}" class="on-inverse">
    <p class="info icon-on-inverse">${cardSub}</p>
    </a></div>`;

    // send html back to caller
    return str;
}

// create card header
function createCardHeaderAction(title, sub, subClick, style, action) {

    // update vars
    cardTitle = title;
    cardSub = sub;
    // this will accept onclick javascript code for the info/education action
    cardSubOnClick = subClick;
    // Used to select low contrast vs high contrast actions
    headStyle = style;

    // Format string to return
    let str = `<div class="card-header ${style}">
    <div class="card-head-flex-container">
    <span class="heading5">${cardTitle}</span>
    ${action}</div>
    <a href="#" onclick="${cardSubOnClick}">
    <p class="info">${cardSub}</p>'
    </a></div>`;

    // send html back to caller
    return str;
    } 


// create card header
function createCardBody(content) {

    // update vars
    // if(content){
        cardContent = content;
    // }
    
    // Format string to return
    let str = `<div class="card-body">${cardContent}</div>`;

    // send html back to caller
    return str;
    } 


    
    // ADD THIS TO YOUR HTML PAGE

    // === HTML
    /*
    <!-- CARD HEADER -->
    <div class="card-header">
    <span class="heading5">Current cover</span>
    <a href="" class="on-inverse">
        <p class="info icon-on-inverse">Learn about current cover</p>
    </a>
    </div>
    */


    // === JAVASCRIPT
    /*
    <script>
    // COVER CARD
            // card header - Title, sub, onclick js, style, element id, action
            createCardHeader(
                "TPD & Death cover",
                "About Death & TPD cover",
                "window.alert('Education about how these cover types work')",
                "bglight",
                "card-01-header",
            );

            // CUSTOM DEATH CARD
            // card header - Title, sub, onclick js, style, element id, action
            createCustomCardHeader(
                "Death cover",
                "Learn more about your cover types",
                "window.alert('Education about how these cover types work')",
                "bglight",
                "custom-death-current-header",
                "<button class='secondary btn-action danger' >Cancel</button>"
            );
    </script>
    */
