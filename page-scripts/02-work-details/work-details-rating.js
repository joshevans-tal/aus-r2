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
let bodyContainer = document.getElementById("content-container");
// document.body.innerHTML += tcModal(dorcContent["title"], dorcContent["content"], dorcContent["modal footer"],dorcContent["id"]);
// for(i=0; i<)
console.log("formQs.keys: "+Object.keys(formQs));

//  MAIN Content
let page = ``;

page += addSpace('small');

page += workDetails["personal details"];

page += addSpace('small');

page += `<hr />`;

page += addSpace('small');

// ----------------------------------------------------------------------------------

// FORM

// FORM

        // email
        page += tcFormEmail(formQs.question1[0]);

        // Aus residency
        page += tcFormText(formQs.question2[0]);

        // work status
        // page += tcFormSelect(formQs.question3[0]);

        // page += tcFormRadio(formQs.question5[0]);
        page += `<div class=" make-flex column occ-question-container" style="margin-top: 40px;"><br>`;
        page += tcFormCurrencyCycle(formQs.question4[0]);
        page += `</div>`;
        page += tcFormSelect(formQs["occupation-list"][0]);
/*
        page += `<div class="occ-question-container">`;

        page += tcFormRadio(formQs.occupation1[0]);

        page += tcFormRadio(formQs.occupation2[0]);

        page += tcFormRadio(formQs.occupation3[0]);
        
        page += `</div>`;
*/
        page += addSpace('medium');

        // page += `<div class=" make-flex column occ-question-container">`;
        
        // page += tcFormRadio(formQs.occupation1[0]);
        // page += tcFormRadio(formQs.occupation2[0]);
        // page += tcFormRadio(formQs.occupation3[0]);
        // page += tcFormRadio(formQs.occupation4[0]);


        // page += addSpace('medium');
        // page += `
        // <label class="occ-rating"><strong>Work rating: <span id="work-rating">Blue Collar</span><strong></label>
        // <p id=""work-rating-description>Insurance cover with a Blue Collar work rating
        // is the most expensive.
        // However, you could pay less for your insurance cover
        // if you’re eligible for a White Collar or Professional work
        // rating and your application to change your individual
        // work rating is accepted.</p>
        // </div>`;

        // page += addSpace('medium');

        page += `<div class="make-flex column occ-question-container">
        <!-- Question 1: Job Classification -->
        <div class="form-element">
            <label for="" class="label-icon">
                <span style="margin-top:20px;">
                    Are the usual activities of your main job 'White Collar'?
                    <ul>
                        <li><p class="small">you spend more than 80% of your job doing clerical or administrative activities in an office-based environment. or</p></li>
                        <li><p class="small">you're a professional using your university qualification in a job that has no unusual work hazards. (Some examples of unusual work hazards include: working underground, working underwater, working at heights or working in the air).</p></li>
                    </ul>
                </span>
            </label>
            <div class="radio-container">
                <label class="radio-item"><input id="occupation1" type="radio" name="occupation1" value="yes"> yes</label>
                <label class="radio-item"><input id="occupation1" type="radio" name="occupation1" value="no"> no</label>
            </div>
        </div>
        <!-- Question 2: Earnings -->
        <div class="form-element">
            <label for="" class="label-icon">
                <p>Do you earn $100,000 or more a year (excluding Superannuation Guarantee (SG) contributions) from your job(s)?</p>
                <span class="icon-bg" onclick="myTooltip(this,'This amount is pro rata for part-time employment (for example, if you work part-time 4 days a week and earn $96,000 a year, your pro rata/full-time equivalent is $120,000).')">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM10 7C10 6.44772 10.4477 6 11 6H11.01C11.5623 6 12.01 6.44772 12.01 7C12.01 7.55228 11.5623 8 11.01 8H11C10.4477 8 10 7.55228 10 7ZM11 10C11.5523 10 12 10.4477 12 11V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V11C10 10.4477 10.4477 10 11 10Z" fill="black"></path>
                    </svg>
                </span>
            </label>
            <div class="radio-container">
                <label class="radio-item"><input id="occupation2" type="radio" name="occupation2" value="yes"> yes</label>
                <label class="radio-item"><input id="occupation2" type="radio" name="occupation2" value="no"> no</label>
            </div>
        </div>
        <!-- Question 3: University Qualification -->
        <div class="form-element">
            <label for="" class="label-icon">
                <p>Do you have a university qualification?</p>
                <span class="icon-bg" onclick="myTooltip(this,'This amount is pro rata for part-time employment (for example, if you work part-time 4 days a week and earn $96,000 a year, your pro rata/full-time equivalent is $120,000).')">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM10 7C10 6.44772 10.4477 6 11 6H11.01C11.5623 6 12.01 6.44772 12.01 7C12.01 7.55228 11.5623 8 11.01 8H11C10.4477 8 10 7.55228 10 7ZM11 10C11.5523 10 12 10.4477 12 11V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V11C10 10.4477 10.4477 10 11 10Z" fill="black"></path>
                    </svg>
                </span>
            </label>
            <div class="radio-container">
                <label class="radio-item"><input id="occupation3" type="radio" name="occupation3" value="yes"> yes</label>
                <label class="radio-item"><input id="occupation3" type="radio" name="occupation3" value="no"> no</label>
            </div>
        </div>
        <!-- Question 4: Management Role -->
        <div class="form-element">
            <label for="" class="label-icon">
                <p>Do you have a management role in your company?</p>
                <span class="icon-bg" onclick="myTooltip(this,'This amount is pro rata for part-time employment (for example, if you work part-time 4 days a week and earn $96,000 a year, your pro rata/full-time equivalent is $120,000).')">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM10 7C10 6.44772 10.4477 6 11 6H11.01C11.5623 6 12.01 6.44772 12.01 7C12.01 7.55228 11.5623 8 11.01 8H11C10.4477 8 10 7.55228 10 7ZM11 10C11.5523 10 12 10.4477 12 11V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V11C10 10.4477 10.4477 10 11 10Z" fill="black"></path>
                    </svg>
                </span>
            </label>
            <div class="radio-container">
                <label class="radio-item"><input id="occupation4" type="radio" name="occupation4" value="yes"> yes</label>
                <label class="radio-item"><input id="occupation4" type="radio" name="occupation4" value="no"> no</label>
            </div>
        </div>
        <!-- Work Rating Display -->
        <div class="space v-medium"><!-- SPACER! --></div>
        <label class="occ-rating"><strong>Work rating: <span id="work-rating">Blue Collar</span></strong></label>
        <strong>
            <p id="work-rating-description">
                Insurance cover with a Blue Collar work rating is the most expensive. However, you could pay less for your insurance cover if you’re eligible for a White Collar or Professional work rating and your application to change your individual work rating is accepted.
            </p>
        </strong>
    </div>`;

        page += addSpace('medium');

        page += createInlineAlert(formQs["occupation alert"][0].message, formQs["occupation alert"][0].state);


        page += tcCTA(
            // Set cta layout DEFAULT should be 'fullwidth' - any other value will collaps the buttons
            'fullwidth',
            // Define 2D array of buttons
            [
                [
                    'primary',
                    'large',
                    'Confirm & continue',
                    `window.location = "03-cover-select.html";`
                ],
                [
                    'tertiary',
                    'large',
                    'Cancel & exit',
                    `window.alert("This would exit to your insurance dashboard");`
                ]
            ]

        );

// page += tcTooltip('label for the tooltip', 'Tooltip text');
// -------------------------------
//  ADD MAIN CONTENT STRUCTURE - TO HTML PAGE
// -------------------------------
bodyContainer.innerHTML = page;


///////////////////  FUNCTIONS  \\\\\\\\\\\\\\\\\\\\\\\


function personalDetails(){};

// document.getElementById("occupation1").addEventListener("click", function(){ alert("Hello World!"); }    );

document.addEventListener("DOMContentLoaded", function() {
    const occupation1 = document.getElementsByName('occupation1');
    const occupation2 = document.getElementsByName('occupation2');
    const occupation3 = document.getElementsByName('occupation3');
    const occupation4 = document.getElementsByName('occupation4');
    const workRatingSpan = document.getElementById('work-rating');
    const workRatingDescription = document.getElementById('work-rating-description');

    function updateWorkRating() {
        const occupation1Value = getRadioValue(occupation1);
        const occupation2Value = getRadioValue(occupation2);
        const occupation3Value = getRadioValue(occupation3);
        const occupation4Value = getRadioValue(occupation4);

        if (occupation1Value === "no") {
            workRatingSpan.innerText = "Blue Collar";
            workRatingDescription.innerText = "Insurance cover with a Blue Collar work rating is the most expensive. However, you could pay less for your insurance cover if you’re eligible for a White Collar or Professional work rating and your application to change your individual work rating is accepted.";
        } else if (occupation1Value === "yes") {
            if (occupation2Value === "yes" && ((occupation3Value === "yes" && occupation4Value === "no") || (occupation3Value === "no" && occupation4Value === "yes"))) {
                workRatingSpan.innerText = "Professional";
                workRatingDescription.innerText = "You qualify for a Professional work rating, which may offer more affordable insurance cover.";
            } else if (occupation2Value === "no" || occupation3Value === "no" || occupation4Value === "no") {
                let noCount = 0;
                if (occupation2Value === "no") noCount++;
                if (occupation3Value === "no") noCount++;
                if (occupation4Value === "no") noCount++;
                if (noCount >= 2) {
                    workRatingSpan.innerText = "White Collar";
                    workRatingDescription.innerText = "You qualify for a White Collar work rating, which offers a balance between cost and coverage.";
                } else {
                    workRatingSpan.innerText = "Blue Collar";
                    workRatingDescription.innerText = "Insurance cover with a Blue Collar work rating is the most expensive. However, you could pay less for your insurance cover if you’re eligible for a White Collar or Professional work rating and your application to change your individual work rating is accepted.";
                }
            }
        }
    }

    function getRadioValue(radioButtons) {
        for (let radio of radioButtons) {
            if (radio.checked) {
                return radio.value;
            }
        }
        return null;
    }

    // Add event listeners to all radio buttons
    [...occupation1, ...occupation2, ...occupation3, ...occupation4].forEach(radio => {
        radio.addEventListener('change', updateWorkRating);
    });
});