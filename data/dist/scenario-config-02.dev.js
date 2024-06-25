"use strict";

var currentCover = {
  "insuranceProducts": [{
    "product": "Death",
    "coverages": [{
      "coverType": "Fixed",
      "benefit": 700000,
      // change to string 'hide' to hide from cover items
      "premiumBase": 0.00004472,
      "paid": "/mth",
      "min": 0,
      "max": 10000000,
      "step": 10000,
      "education": "The term Fixed cover, means your benefit does not change over time. This cover type tends to increase in cost with time."
    }, {
      "coverType": "Age-based",
      "benefit": 184000,
      // change to string 'hide' to hide from cover items
      "premiumBase": 0.00008588,
      "paid": "/mth",
      "min": 0,
      "max": 184000,
      "step": 184000,
      // match to units
      "education": "An Age-based benefit changes the amount you are paid, as you age. This cover type tends to even out cost over time."
    }]
  }, {
    "product": "TPD",
    "coverages": [{
      "coverType": "Fixed",
      "benefit": 850000,
      // change to string 'hide' to hide from cover items
      "premiumBase": 0.00004468,
      "paid": "/mth",
      "min": 0,
      "max": 5000000,
      "step": 10000,
      "education": "The term Fixed cover, means your benefit does not change over time. This cover type tends to increase in cost with time."
    }, {
      "coverType": "Age-based",
      "benefit": 184000,
      // change to string 'hide' to hide from cover items
      "premiumBase": 0.00008588,
      "paid": "/mth",
      "min": 0,
      "max": 184000,
      "step": 184000,
      // match to units
      "education": "An Age-based benefit changes the amount you are paid, as you age. This cover type tends to even out cost over time."
    }]
  }, {
    "product": "IP",
    "coverages": [{
      "coverType": "Age-based",
      "benefit": 4200,
      "education": "An Age-based benefit changes the amount you are paid, as you age. This cover type tends to even out cost over time.",
      "premiumBase": 0.008788,
      "paid": "monthly",
      "salary": 6796.67,
      "edu percent salary": "Percent of salary indicates how much of your salary you would receive each month if you were to claim.",
      "Occupation category": "light pants",
      "edu occupation category": "Your occupation category makes up part of your risk profile and may affect your premiums. It is important you are insured for the right level of risk",
      "Waiting period": "8 weeks",
      "edu waiting period": "A waiting period is the amount of time you need to wait after illness or injury, before you are elligible to claim.",
      "Benefit period": "2 years",
      // match to units
      "edu benefit period": "A benefit period is the amount time a benefit will continue to be paid."
    }]
  }]
}; // ----------------------------------------------------------------
//   DATA SET UP - used by all pages
// ----------------------------------------------------------------
// Access the insuranceProducts array within currentCover

var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var tpdDataAged = insuranceProductsArray[1].coverages[1];
var ipData = insuranceProductsArray[2].coverages[0];
var sData = deathDataFixed;
var sProduct = insuranceProductsArray[0].product;