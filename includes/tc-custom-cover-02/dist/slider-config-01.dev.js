"use strict";

var currentCover = {
  "insuranceProducts": [{
    "product": "Death",
    "coverages": [{
      "coverType": "Fixed",
      "benefit": 267000,
      "premiumBase": 0.00004472,
      "paid": "/mth",
      "min": 0,
      "max": 10000000,
      "step": 10000
    }, {
      "coverType": "Age-based",
      "benefit": 261000,
      "premiumBase": 0.00008588,
      "paid": "/mth",
      "min": 0,
      "max": 10000000,
      "step": 261000 // match to units

    }]
  }, {
    "product": "TPD",
    "coverages": [{
      "coverType": "Fixed",
      "benefit": 321000,
      "premiumBase": 27.23,
      "paid": "/mth",
      "min": 0,
      "max": 5000000,
      "step": 10000
    }]
  }, {
    "product": "IP",
    "coverages": [{
      "benefit": 4200,
      "premiumBase": 34.23,
      "paid": "monthly",
      "Occupation category": "light pants",
      "Waiting period": "8 weeks",
      "Benefit period": "2 years"
    }]
  }]
}; // Access the insuranceProducts array within currentCover

var insuranceProductsArray = currentCover.insuranceProducts;
var deathDataFixed = insuranceProductsArray[0].coverages[0];
var deathDataAged = insuranceProductsArray[0].coverages[1];
var tpdDataFixed = insuranceProductsArray[1].coverages[0];
var ipData = insuranceProductsArray[2].coverages[0];
var sData = deathDataFixed;
var sProduct = insuranceProductsArray[0].product; // // Insurance cover data
// var currentCover = [
//     {
//         DeathCoverFixed: {
//             product: "Death",
//             coverType: "Fixed",
//             benefit: 261000,
//             premiumBase: .00004472,
//             paid: '/mth',
//             min: 0,
//             max: 5000000,
//         },
//         DeathCoverAgeBased: {
//             product: "Death",
//             coverType: "Age-based",
//             benefit: 261000,
//             premiumBase: .00008588,
//             paid: '/mth',
//             min: 0,
//             max: 5000000,
//         },
//         tpdCover: {
//             product: "TPD",
//             coverType: "Fixed",
//             benefit: 121000,
//             ageBased: 0,
//             premiumBase: 27.23,
//             paid: '/mth'
//         },
//         ipCover: {
//             product: "IP",
//             benefit: 4200,
//             premiumBase: 34.23,
//             paid: 'monthly',
//             "Occupation category": "light pants",
//             "Waiting period": "8 weeks",
//             "Benefit period": "2 years"
//         }
//     }
// ];