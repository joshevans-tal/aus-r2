// Init vars

let cardTitle = "Card title";
let cardSub = "sub title";
let cardSubOnClick = "modal event";
let headStyle = "default";

// create card header
function createCardHeader(title, sub, subClick, style, id) {

    // update vars
    cardTitle = title;
    cardSub = sub;

    cardSubOnClick = subClick;
    headStyle = style;

    let str = `<div class="card-header ${style}">
    <span class="heading5">${cardTitle}</span><br>
    <a href="#" onclick="${cardSubOnClick}" class="on-inverse">
    <p class="info icon-on-inverse">${cardSub}</p>
    </a></div>`;

    document.getElementById(id).innerHTML = str;
    // return str;
}

// create card header
function createCustomCardHeader(title, sub, subClick, style, id, action) {

    // update vars
    cardTitle = title;
    cardSub = sub;
    // this will accept onclick javascript code for the info/education action
    cardSubOnClick = subClick;
    // Used to select low contrast vs high contrast actions
    headStyle = style;


    if (style == "bglight") {
        let str = `<div class="card-header ${style}">
        <div class="card-head-flex-container">
        <span class="heading5">${cardTitle}</span>
        ${action}</div>
        <a href="#" onclick="${cardSubOnClick}">
        <p class="info">${cardSub}</p>'
        </a></div>`;

        document.getElementById(id).innerHTML = str;

    } else {
        let str = '<div class="card-header ' + style + '">';
        str += '<div class="card-head-flex-container">';
        str += '<span class="heading5">' + cardTitle + '</span>';
        str += '<button class="secondary btn-action danger" >Get started</button>';
        str = +'</div>';
        str += '<a href="#" onclick="' + cardSubOnClick + '" class="on-inverse">';
        str += '<p class="info icon-on-inverse">' + cardSub + '</p>';
        str += '</a></div>';

        document.getElementById(id).innerHTML = str;
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
}