// ---------------------------------------------------------------------
// ******** CUSTOM COVER – DEATH - STATE: CURRENT COVER *********
// ---------------------------------------------------------------------

/*
    <<< HOW DOES THIS WORK? >>>>
    

    **  This script is called from "cover-state-ip-current.js"
    
        First, ipEditInner(id) is called. It is passed a reference to the 
        outer-card body with ipEditInner(ipBody);
    
    1.  DEATH EDIT INNER FUNC STARTS PROCESS
        > Is NOT a return func – it creates directly into the given id using innerHTML
        
    FIRST : MAIN Structure
        1.1 | It sets up the 'content' var
        1.2 | It creates an inner card with no education or action
                - This creates an inner card id 'ip-edit-card-body'
        1.3 | Create a 'reset' btn, which calls ip current cover, 
              sending back the given outer card id with ipCurrentInner(ipBody);
    SECOND : INNER STRUCTURE
        1.4 | It then creates a var to hold inner-card body id: 'ipEditBody'
        1.5 | The inner-card body is populated first with innerHTML = ipEditInnerContent();
                > This is a return function
                > It returns html structure including:
                    - Age-based switch on/off pattern
                    - Fixed slider containers with hard coded ids
    THIRD : EDIT FUNCTIONS ARE BUILT
        1.6 | Once the html content structure is in place, the sliders are added
              using a function call 'createIPSliders();'
        1.7 | Create-slider function is a hard coded slider call. It is:
                > specific to ip right now
                > knows the specific ids add for the ip slider
                > Initiates a slider using a specific product name
                    eg. let slider1 = sliderInit('ip-fixed');

       

    !!!! IMPORTANT !!!!
    THIS SCRIPT ASSUMES::
       
        >   The HTML page <script src="./cover-choice-page-structure.js"></script> at the bottom of the page
            or has some other way of being called. This script won't call itself. 


*/

/* 
    ##### IP benefit options ####


let ipBenefitOptions = ['Keep existing', 'Increase to maximum'];
let ipWaitingPeriodOptions = [['Your payments would start after a period of'],['15 days', '30 days', '90 days']];
let ipBenefitPeriodOptions = [['Receive this benefit for a period of'],['2 years', '5 years']];
let ipEmployerSalary = ipData.salary;
let ipEmployerSalaryMaxMth = (ipData.salary*ipData.max)/12;
let ipAAL = ipData.aal;

console.log("####### scenario IP salary = "+ ipEmployerSalary);
console.log("####### scenario IP AAL = "+ ipAAL);
console.log("####### IP Max benefit/mth = "+ ipEmployerSalaryMaxMth);
*/

// ---------------------------------------------------------------------
// 02  |||  CREATE DEATH INNER CARD
// ---------------------------------------------------------------------

function ipEditInnerFormula(id){
    /// 1 || START CONTENT INSIDE OUTER CARD
    let content = `<p>Select your new Income Protection benefit options below.</p>
    <div class="space v-small"><!-- SPACER! --></div>
    <p class="label"><strong>Select your cover type:</strong><p>
    <div class="space v-medium"><!-- SPACER! --></div>
    <div class="make-flex flex-gap-small">
    <!--<button class='secondary btn-medium ' disabled onclick='ipEditInnerFormula(ipBody)'>Formula</button>-->
    <button class='primary btn-medium ' onclick='#'><img src="images/icons/radio-selected.svg" /> Formula</button>
    <button class='secondary btn-medium ' onclick='ipEditInnerFixed(ipBody);'><img src="images/icons/radio-deselected.svg" /> Fixed cover</button>
    </div>
    <div class="space v-large"><!-- SPACER! --></div>
    `;


    // 2 || CREATE INNER CARD

    content += tcCard(
        `ip-edit`,
        `bglight`,
        `IP formula benefit:`,
        `hide`,
        `window.alert('Education content about cover types')`,
        ``,
        `Initialise`
        );
    
    // 3 || ADD CONTENT AFTER INNER CARD
    content += `<button class='secondary btn-medium btn-full'onclick='ipCurrentInnerCard(ipBody);'><img src="images/icons/ic-reset.svg" /> Reset to existing cover</button>`;
    id.innerHTML = content;
    
    let ipEditBody = document.getElementById('ip-edit-card-body');

    ipEditBody.innerHTML += ipEditInnerContentFormula(); // THIS IS THE INNER CONTENT
        // ipEditInnerContent();
        // createIPSliders();
}

function testIP(){
    window.alert('Oi!');
    document.getElementById('ip-card-body').innerHTML = `hello`;
    ipEditInnerFixed('ip-card-body');
}
// ---------------------------------------------------------------------
// CREATE DEATH INNER CONTENT
// ---------------------------------------------------------------------

/*

*********************************************
//   DATA SET UP - used by all pages
*********************************************
// Access the insuranceProducts array within currentCover

var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var tpdDataAged = insuranceProductsArray[1].coverages[1];
var ipData = insuranceProductsArray[2].coverages[0];
let sData = deathDataFixed;
let sProduct = insuranceProductsArray[0].product;

*/

// ---------------------------------------------------------------------
// 03  |||  CALCULATE TOTAL PREMIUM - TO DO!!!!
// ---------------------------------------------------------------------
function ipTotalPremiumFormula(coverArray){
    
    let totalPremium = '';
    for(i=0; i<coverArray.length; i++){
        totalPremium += coverArray[i];
    }
    
    return totalPremium;
}

// TOTAL BENEFIT
let currentTotalIPBenefit = updateTotalBenefit([ipData.max,ipData.benefit]);
console.log('currentTotalIPBenefit: '+currentTotalIPBenefit);

function updateTotalBenefit(coverArray){
    
    let totalBenefit = '';
    for(i=0; i<coverArray.length; i++){
        totalBenefit += coverArray[i];
    }
    
    return totalBenefit;
}

// ---------------------------------------------------------------------
// 04  |||  RETURN - INNER CARD CONTENT STRUCTURE
// ---------------------------------------------------------------------
function ipEditInnerContentFormula(){

    // ************** ADD CONTENT WHEREVER YOU WANT ***********
    // content += `I'm inside inner ip. Yipee! ipData.benefit: ${ipData.benefit}`;

    // Content var to return

    content = `<div><h3 id="ip-benefit-agedbased">${formatCurrency(ipAAL,0)} /mth</h3></div>`;

    content += `Select a new IP benefit amount
                <div class="space v-small"><!-- SPACER! --></div>`;
                
    content += `<select class="tc-select" style="display:block; width:100%;" id="ip-formula-benefit-select" onchange="updateFormulaIpPremium()">
                    <option value="${ipAAL}">Keep existing</option>
                    <option value="${ipEmployerSalaryMaxMth}">Increase to maximum</option>
                </select>
                <div class="space v-medium"><!-- SPACER! --></div>`;

    function selectForm(data, selected, id) {
        // label
        content += `<div>${data[0]}</div> 
        <div class="space v-small"><!-- SPACER! --></div>`;
        
        content += `<div><select class="tc-select" style="display:block; width:100%;" id="${id}" name="${id}">`;
        for (let i = 0; i < data[1].length; i++) {
            if (data[1][i] == selected) {
                content += `<option value="${data[1][i]}" selected>${data[1][i]}</option>`;
            } else {
                content += `<option value="${data[1][i]}">${data[1][i]}</option>`;
            }
        }
        // close off
        content += `</select></div>
        <div class="space v-medium"><!-- SPACER! --></div>`;    
    }
    

/*
    function selectForm(data, selected){
        // label
        content += `<div>${data[0]}</div> 
        <div class="space v-small"><!-- SPACER! --></div>`;
        // select dropdown
        let selectId = data[1][i];
        let selectIdWhite = selectId.replace(/ /g,'');

        console.log("data[1][i]" + selectId);
        content += `<div><select class="tc-select" id="${selectIdWhite}" name="${data[1][i]}">`;
        for (i=0; i< data[1].length; i++){
            if (data[1][i] == selected){
                content += `<option value="${data[1][i]}" selected>${data[1][i]}</option>`;
            } else {
                content += `<option value="${data[1][i]}">${data[1][i]}</option>`;
            }
        
        }
        // close off
        content += `</select></div>
        <div class="space v-medium"><!-- SPACER! --></div>`;    
    }
   */ 
    // selectForm(ipWaitingPeriodOptions, "60 days", "waitingPeriodSelect");

    // selectForm(ipBenefitPeriodOptions, "2 years", "benefitPeriodSelect");

    content += `<div>
    <label for="benefitPeriodSelect">Benefit Period:</label>
    <div class="space v-small"><!-- SPACER! --></div>
    <select id="benefitPeriodSelect" style="display:block; width:100%;" onchange="updateFormulaIpPremium()">
        <option value="2 years" selected>2 years</option>
        <option value="5 years">5 years</option>
        <option value="to age 65">to age 65</option>
    </select>
</div>
<div class="space v-large"><!-- SPACER! --></div>
<div>
    <label for="waitingPeriodSelect">Waiting Period:</label>
    <div class="space v-small"><!-- SPACER! --></div>
    <select id="waitingPeriodSelect" style="display:block; width:100%;" onchange="updateFormulaIpPremium()">
        <option value="30 days">30 days</option>
        <option value="60 days" selected>60 days</option>
        <option value="90 days">90 days</option>
    </select>
</div>
<div class="space v-large"><!-- SPACER! --></div>`;

    updateIpFormulaFooter(ipAAL);
    

    return content;
    
}

// updateFormulaIpPremium();

// Formula based selection
function updateFormulaBenefit() {
    var x = document.getElementById("ip-formula-benefit-select").selectedIndex;
    var formulaBenefitSelect = document.getElementById("ip-formula-benefit-select").options;
    // alert("Index: " + formulaBenefitSelect[x].index + " is " + formulaBenefitSelect[x].text + " and value is " + formulaBenefitSelect[x].value);
    document.getElementById("ip-benefit-agedbased").innerHTML = formatCurrency(formulaBenefitSelect[x].value,0)+" /mth";
    updateIpFormulaFooter(formulaBenefitSelect[x].value);
  }


// // Waiting period selection
// function updateFormulaWaitin() {
//     var x = document.getElementById("ip-formula-benefit-select").selectedIndex;
//     var formulaBenefitSelect = document.getElementById("ip-formula-benefit-select").options;

//     // alert("Index: " + formulaBenefitSelect[x].index + " is " + formulaBenefitSelect[x].text + " and value is " + formulaBenefitSelect[x].value);
//     document.getElementById("ip-benefit-agedbased").innerHTML = formatCurrency(formulaBenefitSelect[x].value,0);
//     updateIpFormulaFooter(formulaBenefitSelect[x].value);
//   }

// Benefit selection
function getFormulaBenfit() {
    // Benefit period select
    var x = document.getElementById("ip-formula-benefit-select").selectedIndex;
    var formulaBenefitSelect = document.getElementById("ip-formula-benefit-select").options;

    return formulaBenefitSelect[x].value;
  }

// Benefit period selection
function getFormulaBenfitPeriod() {
    // Benefit period select
    var x = document.getElementById("benefitPeriodSelect").selectedIndex;
    var formulaBenefitPSelect = document.getElementById("benefitPeriodSelect").options;

    return formulaBenefitPSelect[x].value;
  }

// Waiting period selection
function getFormulaWaitingPeriod() {
    // Benefit period select
    var x = document.getElementById("waitingPeriodSelect").selectedIndex;
    var formulaWaitingPSelect = document.getElementById("waitingPeriodSelect").options;
    return formulaWaitingPSelect[x].value;
  }


// !!! UPDATE FORMULA PREMIUM !!!
function updateFormulaIpPremium(){
    const myBenefit = getFormulaBenfit();
    updateFormulaBenefit();
    const myBenefitPeriod = getFormulaBenfitPeriod();
    const myWaitingPeriod = getFormulaWaitingPeriod();
    const myMultiplier = ipMultiplierScheme[myBenefitPeriod][myWaitingPeriod];
    console.log("\n myMultiplier: "+ myMultiplier + "\n myBenefit: "+ myBenefit + "\n myBenefitPeriod: "+ myBenefitPeriod + "\n myWaitingPeriod: "+myWaitingPeriod);

    const myPremium = myBenefit * myMultiplier;
    console.log("myPremium: " + myPremium);
    updateIpFormulaFooter(myPremium);
    updateIPCartFooter(myPremium);
}

function updateIpFormulaFooter(benefit, waitingP, benefitP){

    let premium = calcIPPremiumFormula(benefit);

    document.getElementById('ip-edit-card-footer').innerHTML = `
    
    <div class="footer-premium">
        <div>
            <div>Monthly premium: </div>
            <div> ${formatCurrency(premium,2)} /mth</div>
        </div>
    </div>

    `;
}

// function updateIPCartFooter(benefit, waitingP, benefitP){

//     let premium = calcIPPremiumFixed(benefit);

//     document.getElementById('cart-ip-item-value').innerHTML = `${formatCurrency(premium,2)} /mth`;
// }

function calcIPPremiumFormula(benefit){
    return ipMultiplierScheme["2 years"]["60 days"]*benefit*ipMultiplier;
}


// // -----------0))))))))))

// function getSelectedValues() {
//     const benefitPeriodSelect = document.getElementById("benefitPeriodSelect");
//     const waitingPeriodSelect = document.getElementById("waitingPeriodSelect");

//     const selectedBenefitPeriod = benefitPeriodSelect.options[benefitPeriodSelect.selectedIndex].value;
//     const selectedWaitingPeriod = waitingPeriodSelect.options[waitingPeriodSelect.selectedIndex].value;
//     console.log("(((----selectedBenefitPeriod----))): "+ selectedBenefitPeriod);

//     return {
//         benefitPeriod: selectedBenefitPeriod,
//         waitingPeriod: selectedWaitingPeriod
//     };
// }

// function getMultiplier(benefitPeriod, waitingPeriod) {
//     if (ipMultiplierScheme[benefitPeriod] && ipMultiplierScheme[benefitPeriod][waitingPeriod]) {
//         return ipMultiplierScheme[benefitPeriod][waitingPeriod];
//     } else {
//         console.error("No matching multiplier found.");
//         return null;
//     }
// }

// function compareSelectedOptions() {
//     const { benefitPeriod, waitingPeriod } = getSelectedValues();
//     const multiplier = getMultiplier(benefitPeriod, waitingPeriod);

//     if (multiplier !== null) {
//         console.log(`Selected Benefit Period: ${benefitPeriod}`);
//         console.log(`Selected Waiting Period: ${waitingPeriod}`);
//         console.log(`Multiplier: ${multiplier}`);
//     } else {
//         console.log("Invalid selection. No multiplier found.");
//     }
// }

// // function addSelectListeners(){
// //     document.getElementById("benefitPeriodSelect").addEventListener("change", compareSelectedOptions);
// //     document.getElementById("waitingPeriodSelect").addEventListener("change", compareSelectedOptions);
// // }

// // addSelectListeners();
// // Initial call to set the values
// compareSelectedOptions();

// // -------------0))))))))))))
// document.addEventListener('DOMContentLoaded', function() {
//     console.log("it's me!!!!!!!````")
//     updateIpFormulaFooter(ipAAL);
//     updateFormulaIpPremium();
// });
