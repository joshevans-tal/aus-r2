

var currentCover = {
    "insuranceProducts": [
      {
        "product": "Death",
        "coverages": [
          {
            "coverType": "Fixed",
            "benefit": 0,
            "new benefit": 300000,               // change to string 'hide' to hide from cover items
            "premiumBase": 0.00004472,
            "paid": "/mth",
            "min": 0,
            "max": 10000000,
            "step": 10000, 
            "education": `The term Fixed cover, means your benefit does not change over time. This cover type tends to increase in cost with time.`
          },
          {
            "coverType": "Age-based",
            "benefit": 184000,
            "new benefit": 184000,               // change to string 'hide' to hide from cover items
            "premiumBase": 0.00008588,
            "paid": "/mth",
            "min": 0,
            "max": 184000,
            "step": 184000,             // match to units
            "education": `An Age-based benefit changes the amount you are paid, as you age. This cover type tends to even out cost over time.`
          }
        ]
      },
      {
        "product": "TPD",
        "coverages": [
          {
            "coverType": "Fixed",
            "benefit": 0,
            "new benefit": 300000,              // change to string 'hide' to hide from cover items
            "premiumBase": 0.00004468,
            "paid": "/mth",
            "min": 0,
            "max": 5000000,
            "step": 10000, 
            "education": `The term Fixed cover, means your benefit does not change over time. This cover type tends to increase in cost with time.`
          },
          {
            "coverType": "Age-based",
            "benefit": 184000,
            "new benefit": 184000,               // change to string 'hide' to hide from cover items
            "premiumBase": 0.00008588,
            "paid": "/mth",
            "min": 0,
            "max": 184000,
            "step": 184000,             // match to units
            "education": `An Age-based benefit changes the amount you are paid, as you age. This cover type tends to even out cost over time.`
          }
        ]
      },
      {
        "product": "IP",
        "coverages": [
          {
            "coverType": "formula",
            "benefit": 10000,
            "new benefit": 0,
            "min": 0,
            "salary": 150000,
            "aal": 10000,
            "max": .85,
            "step": 184000,
            "education": `An Age-based benefit changes the amount you are paid, as you age. This cover type tends to even out cost over time.`,
            "premiumBase": 0.008788,
            "paid": "monthly",
            "Occupation category": "Blue collar",
            "Waiting period": "60 days",
            "Benefit period": "2 years"      // match to units
          },
          {
            "coverType": "Fixed",
            "benefit": 10000,
            "new benefit": 0,
            "salary": 150000,
            "min": 0,
            "aal": 10000,
            "max": 10625,
            "step": 125,      // match to units
            "education": `An Age-based benefit changes the amount you are paid, as you age. This cover type tends to even out cost over time.`,
            "premiumBase": 0.008788,
            "paid": "monthly",
            "Occupation category": "Blue collar",
            "Waiting period": "60 days",
            "Benefit period": "2 years"
          }
        ]
      }
    ]
  };
  

// ----------------------------------------------------------------
//   DATA SET UP - used by all pages
// ----------------------------------------------------------------

// Access the insuranceProducts array within currentCover
var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var deathPremiumCurrent = (deathDataAged.benefit*deathDataAged.premiumBase) + (deathDataFixed.benefit*deathDataFixed.premiumBase);
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var tpdDataAged = insuranceProductsArray[1].coverages[1];
var tpdPremiumCurrent = (tpdDataAged.benefit*tpdDataAged.premiumBase) + (tpdDataFixed.benefit*tpdDataFixed.premiumBase);
var ipData = insuranceProductsArray[2].coverages[0];
var ipDataFixed = insuranceProductsArray[2].coverages[1];

let sData = deathDataFixed; //... this is init - dynamically set in data-slider script
let sProduct = insuranceProductsArray[0].product; //... this is init - dynamically set in data-slider script


/* 
    ##### IP benefit options ####
*/

var ipMultiplierScheme = {
  "2 years" : {
    "30 days" : 1.0759,
    "60 days" : 0.9576,
    "90 days" : 0.7047
  },
  "5 years" : {
    "30 days" : 1.3158,
    "60 days" : 1.0855,
    "90 days" : 0.8158
  },
  "to age 65" : {
    "30 days" : 2.7031,
    "60 days" : 2.4869,
    "90 days" : 1.6489
  }
}

let ipBenefitOptions = ['Keep existing', 'Increase to maximum'];
let ipWaitingPeriodOptions = [['Your payments would start after a period of'],['30 days', '60 days', '90 days']];
let ipBenefitPeriodOptions = [['Receive this benefit for a period of'],['2 years', '5 years','to age 65']];
let ipEmployerSalary = ipData.salary;
let ipEmployerSalaryMaxMth = (ipData.salary*ipData.max)/12;
let ipAAL = ipData.aal;
let ipMultipliers = ipMultiplierScheme["2 years"]["30 days"];
let ipAALPremium = ipAAL * ipMultipliers;
let ipMultiplier = 0.010;

console.log("####### scenario IP salary = "+ ipEmployerSalary);
console.log("####### scenario IP AAL = "+ ipAAL);
console.log("####### IP Max benefit/mth = "+ ipEmployerSalaryMaxMth);

console.log("####### ipMultiplierScheme['2 years']['60 days'] = "+ ipMultiplierScheme["2 years"]["60 days"]*ipAAL*ipMultiplier);

var ipPremiumCurrent = ipData.aal*ipMultiplierScheme["2 years"]["60 days"]*ipMultiplier;