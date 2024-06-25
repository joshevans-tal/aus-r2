// Insurance cover data
var currentCover = [
    {
        DeathCover: {
            "Fixed Cover": 261000,
            "Age-Based": 50000,
            premiumBase: 34.23,
            paid: 'monthly'
        },
        tpdCover: {
            "Fixed Cover": 121000,
            "Age-Based": 0,
            premiumBase: 27.23,
            paid: 'monthly'
        },
        ipCover: {
            "Benefit": 261000,
            "Benefit period": "5 yrs",
            "Waiting period": "90 days",
            premiumBase: 34.23,
            paid: 'monthly',
            "Occupation category": "light manual"
        }
    }
];


function formatAsCurrency(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'AUD' }).format(number);
}


// Function to update cover details
function updateCoverDetails() {
    // window.alert("ajajajajaj");
    var deathCover = currentCover[0].DeathCover;
    var coverHtml = '';

    for (var key in deathCover) {
        
        if (deathCover.hasOwnProperty(key)) {
            var value = deathCover[key];
            var formattedValue = value;
            
            // Format as currency if the key is "Fixed Cover" or "Age-Based"
            if (key === 'Fixed Cover' || key === 'Age-Based') {
                formattedValue = formatAsCurrency(value);
                
            } else {
                continue; // Skip other keys
            }
            
            // Construct the HTML snippet
            coverHtml += '<div class="row">' +
                '<span class="label">' +
                '<img src="../images/icons/indent-arrow.svg" class="sub-icon" />' +
                '<a onclick=\'dictionary("' + key + '");\'>' + key + '</a>' +
                '</span>' +
                '<span class="cover-value">' + formattedValue + '</span>' +
            '</div>';
            
        }
    }

    // Update the HTML of the container
    document.getElementById('cover-details').innerHTML = coverHtml;
}


// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', updateCoverDetails);



var deathCoverFixedValue = currentCover[0].DeathCover.fixedCover;
var deathCoverFixed = currentCover.DeathCover;

function createStateCurrentDeathTPD(deathid,tpdid){
    // let parentId = id;
    // document.getElementById(parentId).innerHTML = "out function";
    createCustomDeathTpdCurrent(deathid);
    stateCurrentCoverTDP(tpdid);
}

    function createCustomDeathTpdCurrent(id){
        let parentId = id;

            // Iterating over each cover type
    for (var coverType in currentCover[0]) {
        console.log("Cover Type: " + coverType);
        for (var detail in currentCover[0][coverType]) {
            let str = "<div class='row'>";
            str += "<span class='label'>";
            str += "<img src='../images/icons/indent-arrow.svg' class='sub-icon' />";
            str += "<a onclick='dictionary('text');'>Fixed Cover</a>";
            str += "</span>";
            str += "<span class='cover-value>"
            str += "Mooooo";//currentCover[0].ipCover.paid;
            str += "$sdfsldkj</span>";
            str += "</div>";

            document.getElementById(parentId).innerHTML = str;
        }
    }
    /* 
    
    <div class="row">
        <span class="label">
            <img src="../images/icons/indent-arrow.svg" class="sub-icon" />
            <a onclick='dictionary("text");'>Fixed Cover</a>
        </span>
        <span class="cover-value">$260,000</span>
    </div>
    <div class="row">
        <span class="label">
            <img src="../images/icons/indent-arrow.svg" class="sub-icon" />
            <a onclick='dictionary("text");'>Fixed Cover</a>
        </span>
        <span class="cover-value">$260,000</span>
    </div>
    
    */

    // <span class="label"><img src="../images/icons/indent-arrow.svg" class="sub-icon" /> ' + formattedValue.label + ':</span> ' + '<span class="cover-value">' + formattedValue.value + '</span>
}


function stateCurrentCoverTDP(id){
    let parentId = id;

    document.getElementById(parentId).innerHTML = "TTTT Peeee Deee!";
}


// let str = "<div></div>";
// // document.getElementById(parentId).innerHTML = "<div id='custom-death-current-body'></div>"

// // COVER CARD
//             // card header - Title, sub, onclick js, style, element id, action
//             createCardHeader(
//                 "TPD & Death cover",
//                 "About Death & TPD cover",
//                 "window.alert('Education about how these cover types work')",
//                 "bglight",
//                 "card-01-header",
//             );

//             // CUSTOM DEATH CARD
//             // card header - Title, sub, onclick js, style, element id, action
//             createCustomCardHeader(
//                 "Death cover",
//                 "Learn more about your cover types",
//                 "window.alert('Education about how these cover types work')",
//                 "bglight",
//                 "custom-death-current-header",
//                 "<button class='secondary btn-action danger' onclick='cancelDeathCover()'>Cancel</button>"
//             );

//             // CUSTOM TPD CARD
//             // card header - Title, sub, onclick js, style, element id, action
//             createCustomCardHeader(
//                 "TPD cover",
//                 "Learn more about your cover types",
//                 "window.alert('Education about how these cover types work')",
//                 "bglight",
//                 "custom-tpd-current-header",
//                 "<button class='secondary btn-action danger' onclick='cancelTPDCover()'>Cancel</button>"
//             );