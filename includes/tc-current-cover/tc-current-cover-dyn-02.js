// Initialize total premium calculation based on the new data structure
var totalPremium = 0;
currentCover.insuranceProducts.forEach(product => {
    product.coverages.forEach(coverage => {
        totalPremium += coverage.premiumBase; // Sum up premiumBase for totalPremium calculation
    });
});

// Function to create an accordion with button and panel for each insurance product
function createAccordion(displayName, productIndex) {
    var product = currentCover.insuranceProducts[productIndex];
    var accordionButton = document.createElement('div');
    accordionButton.className = 'accordion';
    var accordionLabel = document.createElement('span');
    accordionLabel.className = 'accordion-label';
    var accordionIcon = document.createElement('img');
    accordionIcon.src = './images/icons/ic-plus.svg';
    accordionIcon.style.height = '24px';
    accordionLabel.appendChild(accordionIcon);
    accordionLabel.appendChild(document.createTextNode(displayName));
    accordionButton.appendChild(accordionLabel);

    var accordionPanel = document.createElement('div');
    accordionPanel.className = 'panel';
    accordionPanel.id = product.product.replace(/\s+/g, '') + 'Panel';

    accordionButton.onclick = function() {
        toggleAccordion(product.product.replace(/\s+/g, ''), accordionIcon);
    };

    return { button: accordionButton, panel: accordionPanel };
}

// Function to toggle accordion panel visibility and update the icon
function toggleAccordion(coverType, accordionIcon) {
    var panel = document.getElementById(coverType + 'Panel');
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
        accordionIcon.src = './images/icons/ic-plus.svg';
    } else {
        panel.style.display = 'block';
        accordionIcon.src = './images/icons/ic-minus.svg';
        displayCoverInfo(coverType);
    }
}

// Function to display cover information in the accordion panel, adapted for the new data structure
function displayCoverInfo(coverType) {
    var product = currentCover.insuranceProducts.find(p => p.product.replace(/\s+/g, '') === coverType);
    if (!product) return; // Exit if product not found

    var panelId = coverType + 'Panel';
    var panel = document.getElementById(panelId);
    panel.innerHTML = ''; // Clear existing content

    product.coverages.forEach(coverage => {
        var row = document.createElement('div');
        row.className = 'row';
        var label = document.createElement('span');
        label.className = 'label';
        label.innerHTML = '<img src="./images/icons/indent-arrow.svg" class="sub-icon" /> ' + coverage.coverType + ':';
        var value = document.createElement('span');
        value.className = 'cover-value';
        value.textContent = `$${coverage.benefit.toLocaleString()}`;
        row.appendChild(label);
        row.appendChild(value);
        panel.appendChild(row);
    });
}

// Append the accordionContainer to the insuranceContainer and setup accordions
var insuranceContainer = document.getElementById('insuranceContainer');
currentCover.insuranceProducts.forEach((product, index) => {
    var displayName = product.product + ' Cover';
    var accordion = createAccordion(displayName, index);
    insuranceContainer.appendChild(accordion.button);
    insuranceContainer.appendChild(accordion.panel);
});

// Update the display of the total premium
document.getElementById('totalPremiumValue').textContent = '$' + totalPremium.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '<span class="permonth">/mth</span>';
