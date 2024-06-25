// Init vars
// idName, headStyle, cardTitle, cardSub, subAction
let id = ""
let cardTitle = "Card title";
let cardSub = "sub title";
let cardSubOnClick = "modal event";
let headStyle = "default";
let cardContent = "Default content included";
let cardFooter = "</div></div>"

/*

tcCard()
tcCardAction{}
tcCardHeadless{}

1. Card types
    - default √
    - action √ included
    - headless 

2. Style
    - default √
    - bglight √

3. References
    - [x] take a prefix to create ids √
    - container id √
    - head id √
    - body id √
    RESULT eg. "death-card-container" "death-card-head" "death-card-body"

4. Handle body content
    - ??? perhaps this is empty
    - ??? how will footers work?


------------------------------------------------------------------------
??????????????????|---  COMPONENT USAGE  ---|??????????????????

function tcCard(idName, headStyle, cardTitle, cardSub, subAction,action)
idName............... string: give the card content container an id that can be referenced to populate content
headStyle............ string: 'default'is high contrast 'bglight' is low contrast
cardTitle............ string: Card title text
cardSub.............. string: Education/sub text - Alternatively 'hide' will hide this completely
subAction............ string: javascript string added to cardSub text – eg onclick="${subAction}"
action............... string: Usually a small button but not defined. Location, top right of card.
                      SUGGEST > <button class='secondary danger btn-action' onclick="window.alert('Cancel this')">Cancel</button>

EXAMPLE: 
tcCard(
        `death-current`,
        `bglight`,
        `Your current Death benefit is:`,
        `hide`,
        `window.alert('Education content about cover types')`,
        `<button class='secondary danger btn-action' onclick="window.alert('Cancel this')">Cancel</button>`
        );
*/



function tcCard(idName, headStyle, cardTitle, cardSub, subAction, action, cardFooter){
// ---------------------------------------------------------------------
// 01  |||  INIT VARS
// ---------------------------------------------------------------------
    
    let bgClass;
    let infoClass;
    let eduText;
    console.log(`cardFooter: ${cardFooter}`);
// ---------------------------------------------------------------------
// 02  |||  CHECK REQUESTED CARD STYLE
// ---------------------------------------------------------------------
    // If default -> High contrast treatment

    switch (headStyle) {
        case "bglight":
            bgClass = `card-sub`;
            infoClass = `info`;
          break;
        default:
            bgClass = `card-sub on-inverse`;
            infoClass = `info icon-on-inverse`;
      }


// ---------------------------------------------------------------------
// 03  |||  CHECK IF EDUCATION SHOULD BE HIDDEN
// ---------------------------------------------------------------------
    // Hide education if cardSub == 'hide'

    switch(cardSub){

        case "hide":
            infoClass = "";
            eduText = "</div>";
            // console.log("HIDE MEEEE!!!!! - switch");
        break;

        default:
            // console.log("I don't need to be hidden - switch");
            infoClass = `${ infoClass}`;
            eduText = `<a href="#" 
                onclick="${subAction}" 
                class="${bgClass}">
                <p class="${infoClass}">${cardSub}</p>
            </a></div>`;   
    }


// ---------------------------------------------------------------------
// 04  |||  CREATE CREATE CARD CONTENT TO RETURN
// ---------------------------------------------------------------------
    let myCard = `<div id="${idName}-card-container">
                    <div class="tc-card">`;
    
    // CARD HEADER
    myCard += `
    <div id="${idName}-card-head"class="card-header ${headStyle}">
        <div class="card-head-flex-container">
            <span class="heading5">${cardTitle}</span>
            ${action}
        </div>`;
    
        // DISPLAY EDUCATION
        myCard += `${eduText}`;

    // // CARD BODY
    // myCard += `<div 
    //             id="${idName}-card-body"
    //             class="card-body">
    //             </div>`;
    
    // END CARD
    switch(cardFooter){

        case '':
            myCard += `<div 
            id="${idName}-card-body"
            class="card-body">
            </div>
            <div class="card-footer footerNull"></div>
            </div>`;
        break;

        case undefined:
            myCard += `<div 
            id="${idName}-card-body"
            class="card-body">
            </div>
            <div class="card-footer footerNull"></div>
            </div>`;
        break;

        default:
        myCard += `<div 
        id="${idName}-card-body"
        class="card-body">
        </div>
        <div id="${idName}-card-footer"class="card-footer bglight">${cardFooter}</div>
        </div>`;
    }
    

    return myCard;
}







//  XXXXXXXX!!!!!!XXXXXXXXXXX!!!!!!!XXXXXXXXX!!!!!!!!XXXXXXXX!!!!!!!
// ---------------------------------------------------------------------
// !!!!!  THESE FUNCTIONS WILL ARE DEPRECATED - DO NOT USE  !!!!!
// ---------------------------------------------------------------------
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
