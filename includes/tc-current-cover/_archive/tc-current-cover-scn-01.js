// GET STARTED - Paste the code below into your HTML so that the script has a div with id="insuarnceContainer"
/*
    <div id="insuranceContainer">
        <!-- Current cover script container - DO NOT REMOVE -->
    </div>

*/
// Declare the variable outside the script block
var accordionContainer = document.createElement('div');
accordionContainer.className = 'accordion-container';

// Insurance cover data
var currentCover = [
    {
        DeathCover: {
            fixedCover: 261000,
            ageBased: 50000,
            premiumBase: 34.23,
            paid: 'monthly'
        },
        tpdCover: {
            fixedCover: 121000,
            ageBased: 0,
            premiumBase: 27.23,
            paid: 'monthly'
        },
        ipCover: {
            fixedCover: 261000,
            ageBased: 0,
            premiumBase: 34.23,
            paid: 'monthly',
            "Occupation category": "light manual"
        }
    }
];

// Initialize total premium calculation
var totalPremium = 0;
for (var coverType in currentCover[0]) {
    if (currentCover[0].hasOwnProperty(coverType) && currentCover[0][coverType].hasOwnProperty('premiumBase')) {
        totalPremium += currentCover[0][coverType].premiumBase;
    }
}

// Function to create an accordion with button and panel
function createAccordion(displayName, coverType) {
    var accordionButton = document.createElement('div');
    accordionButton.className = 'accordion';

    // Create a span element to wrap the icon and display name
    var accordionLabel = document.createElement('span');
    accordionLabel.className = 'accordion-label';

    // Create an img element for the accordion icon
    var accordionIcon = document.createElement('img');
    accordionIcon.src = './images/icons/ic-plus.svg'; // Update image path
    accordionIcon.style.height = '24px'; // Set the height of the icon

    // Append the icon to the label span
    accordionLabel.appendChild(accordionIcon);

    // Append the textContent (display name) to the label span
    accordionLabel.appendChild(document.createTextNode(displayName));

    // Append the label span to the accordion button
    accordionButton.appendChild(accordionLabel);

    // Calculate and display the sum of fixedCover and ageBased
    var coverData = currentCover[0][coverType];
    var coverSum = coverData.fixedCover + coverData.ageBased;
    var formattedCoverSum = '$' + coverSum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    var coverSumElement = document.createElement('span');
    coverSumElement.className = 'cover-sum';
    coverSumElement.textContent = ' ' + formattedCoverSum;
    accordionButton.appendChild(coverSumElement);

    // Set up the click event
    accordionButton.onclick = function () {
        toggleAccordion(coverType, accordionIcon);
    };

    var accordionPanel = document.createElement('div');
    accordionPanel.className = 'panel';
    accordionPanel.id = coverType + 'Panel';

    return { button: accordionButton, panel: accordionPanel };
}

// Function to toggle accordion panel visibility and update the icon
function toggleAccordion(coverType, accordionIcon) {
    var panel = document.getElementById(coverType + 'Panel');
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
        accordionIcon.src = './images/icons/ic-plus.svg'; // Change to plus icon
    } else {
        panel.style.display = 'block';
        accordionIcon.src = './images/icons/ic-minus.svg'; // Change to minus icon
        displayCoverInfo(coverType);
    }
}


// Function to display cover information in the accordion panel
function displayCoverInfo(coverType) {
    var cover = currentCover[0][coverType];
    var panel = document.getElementById(coverType + 'Panel');
    panel.innerHTML = '';

    // Iterate through cover properties and display in rows
    for (var prop in cover) {
        if (cover.hasOwnProperty(prop)) {
            // Skip 'premiumBase' and 'paid' properties
            if (prop === 'premiumBase' || prop === 'paid') {
                continue;
            }

            var row = document.createElement('div');
            row.className = 'row';
            var formattedValue = formatValue(prop, cover[prop]);
            row.innerHTML = '<span class="label"><img src="./images/icons/indent-arrow.svg" class="sub-icon" /> ' + formattedValue.label + ':</span> ' + '<span class="cover-value">' + formattedValue.value + '</span>';
            panel.appendChild(row);
        }
    }
}


// Function to format values based on property type
function formatValue(property, value) {
    if (property === 'fixedCover') {
        return { label: 'Fixed Cover', value: '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') };
    } else if (property === 'ageBased') {
        return { label: 'Age-based', value: '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }; // return { label: 'Age-based', value: value };
    } else if (property === 'premiumBase') {
        return { label: 'Premium Base', value: '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') };
    }
    return { label: property, value: value };
}

// Accordion for Death Cover
var deathCoverAccordion = createAccordion('Death Cover', 'DeathCover');
accordionContainer.appendChild(deathCoverAccordion.button);
accordionContainer.appendChild(deathCoverAccordion.panel);

// Accordion for TPD Cover
var tpdCoverAccordion = createAccordion('TPD Cover', 'tpdCover');
accordionContainer.appendChild(tpdCoverAccordion.button);
accordionContainer.appendChild(tpdCoverAccordion.panel);

// Accordion for IP Cover
var ipCoverAccordion = createAccordion('IP Cover', 'ipCover');
accordionContainer.appendChild(ipCoverAccordion.button);
accordionContainer.appendChild(ipCoverAccordion.panel);

// Total Premium Row
var totalPremiumRow = document.createElement('div');
totalPremiumRow.className = 'row';
totalPremiumRow.id = 'totalPremiumRow';
totalPremiumRow.innerHTML = '<span class="label">Total Premium:</span> <span class="cover-value" id="totalPremiumValue">$0.00</span>';
accordionContainer.appendChild(totalPremiumRow);

// Append the accordionContainer to the insuranceContainer
var insuranceContainer = document.getElementById('insuranceContainer');
insuranceContainer.appendChild(accordionContainer);

// Display total premium
var totalPremiumValue = document.getElementById('totalPremiumValue');
totalPremiumValue.innerHTML = '$' + totalPremium.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+ '<span class="permonth">/mth</span>';
