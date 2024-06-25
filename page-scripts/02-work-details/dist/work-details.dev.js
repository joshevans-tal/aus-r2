"use strict";

/*
// -----------------------------------------------------------------------------------------------------------------
//  02 ||  WORK DETIALS - by Josh Evans
// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------
// HOW DOES IT WORK?
// -----------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------
00 || This is a page building script. ###
--------------------------------------------------------------------

The script adds elements to the DOM, building out the page content and features.
Like the rest of the app - this is written in vanilla js without modules

This script assumes
    1.   The page that calls it is using my page template script, so the div id="content-container" exists
    2.   The appropriate component and data scripts have been loaded into the head of the html doc

REQUIRES:
    * tc-page-template
    * tcModal
    * tcCard
    * tc-cover-item
    * tcCta
    * utilities
    * tcTooltip    
    * manage-copy-01
    * scenario-config-xx

*/
// -----------------------------------------------------------------------------------------------------------------
// CREATE PAGE CONTENT STRUCTURE
// -----------------------------------------------------------------------------------------------------------------
// BODY CONTAINER IS id="content-container"
var bodyContainer = document.getElementById("content-container"); // document.body.innerHTML += tcModal(dorcContent["title"], dorcContent["content"], dorcContent["modal footer"],dorcContent["id"]);
// for(i=0; i<)

console.log("formQs.keys: " + Object.keys(formQs)); //  MAIN Content

var page = "";
page += addSpace('small');
page += workDetails["personal details"];
page += addSpace('small');
page += "<hr />";
page += addSpace('small'); // ----------------------------------------------------------------------------------
// FORM
// FORM
// email

page += tcFormEmail(formQs.question1[0]); // Aus residency
// page += tcFormRadio(formQs.question2[0]);
// work status

page += tcFormSelect(formQs.question3[0]);
page += tcFormRadio(formQs.question4[0]);
page += tcFormCurrencyCycle(formQs.question5[0]);
page += tcFormSelect(formQs["occupation-list"][0]);
/*
        page += `<div class="occ-question-container">`;

        page += tcFormRadio(formQs.occupation1[0]);

        page += tcFormRadio(formQs.occupation2[0]);

        page += tcFormRadio(formQs.occupation3[0]);
        
        page += `</div>`;
*/

page += addSpace('medium');
page += createInlineAlert(formQs["occupation alert"][0].message, formQs["occupation alert"][0].state);
page += tcCTA( // Set cta layout DEFAULT should be 'fullwidth' - any other value will collaps the buttons
'fullwidth', // Define 2D array of buttons
[['primary', 'large', 'Confirm & continue', "window.location = \"03-cover-select.html\";"], ['tertiary', 'large', 'Cancel & exit', "window.alert(\"This would exit to your insurance dashboard\");"]]); // page += tcTooltip('label for the tooltip', 'Tooltip text');
// -------------------------------
//  ADD MAIN CONTENT STRUCTURE - TO HTML PAGE
// -------------------------------

bodyContainer.innerHTML = page; ///////////////////  FUNCTIONS  \\\\\\\\\\\\\\\\\\\\\\\

function personalDetails() {}

;