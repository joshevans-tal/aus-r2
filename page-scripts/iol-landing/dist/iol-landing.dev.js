"use strict";

// -----------------------------------------------------------------------------------------------------------------
// CREATE PAGE CONTENT STRUCTURE
// -----------------------------------------------------------------------------------------------------------------
// BODY CONTAINER IS id="content-container"
var bodyContainer = document.getElementById("content-container");
var page = "<h6 style=\"margin:0;\">Welcome Geraldine,</h6><br>\n        <p>You can view your existing cover and the options you are able to manage on the page below.<br><br></p>\n        ";
page += "<div class=\"iol-tile-container\">";
page += createIOLCoverTile("\n        <p>Death Cover</p><br>\n        <p style=\"font-size:1.5rem; font-weight: bold;\">$184,000</p>\n        ");
page += createIOLCoverTile("\n        <p>Total & Permanent Disablement Cover</p>\n        <p style=\"font-size:1.5rem; font-weight: bold;\">$184,000</p>\n        ");
page += createIOLCoverTile("\n        <p>Income Protection</p><br>\n        <p style=\"font-size:1.5rem; font-weight: bold;\">No cover</p>\n        ");
page += createIOLCoverTile("\n        <p>Work Rating</p><br>\n        <p style=\"font-size:1.5rem; font-weight: bold;\">Blue collar</p>\n        ");
page += "</div>";
page += "<div class=\"iol-accent-bg\" style=\"padding:16px 16px 24px 16px; margin-top: 12px;\">\n        <p class=\"caption\" style=\"text-align: center;\">\n        [ Flexible notification text can be included to provide experience guidance ]\n        </p>\n        </div></div>";
page += "<div class=\"iol-tile-container\" style=\"margin-top: 20px;\">";
page += createIOLActionTile("<p><img src=\"./images/iol-landing-images/start-cover-icon.svg\" width=\"60px\"/></p>", "<p>Start your <br>basic cover early</p>", "01-warm-welcome.html", 'tile1');
page += createIOLActionTile("<p><img src=\"./images/iol-landing-images/change-cover-icon.svg\" width=\"60px\"/></p>", "<p>Manage <br>your cover</p>", "01-warm-welcome.html", 'tile2');
page += createIOLActionTile("<p><img src=\"./images/iol-landing-images/transfer-cover-icon.svg\" width=\"60px\"/></p>", "<p>Transfer cover<br>to us</p>", "#", 'tile3');
page += createIOLActionTile("<p><img src=\"./images/iol-landing-images/work-rating-icon.svg\" width=\"60px\"/></p>", "<p>Change your<br>work rating</p>", "#", 'tile4');
page += "</div>"; // page += tcCTA(
//     // Set cta layout DEFAULT should be 'fullwidth' - any other value will collaps the buttons
//     'fullwidth',
//     // Define 2D array of buttons
//     // use double quotes for urls
//     [
//         [
//             'primary',
//             'large',
//             'Get started',
//             `window.location = "01-warm-welcome.html";`
//         ],
//         [
//             'tertiary',
//             'large',
//             'Cancel & exit',
//             `window.alert("This would exit to your insurance dashboard");`
//         ]
//     ]
// );

bodyContainer.innerHTML += page; // bodyContainer.insertAdjacentHTML("afterend", `<div class="body-container elevation-medium" style="max-width: 260px;">Hello</div>`);

function createIOLCoverTile(content) {
  var tile = "<div class=\"iol-tile iol-accent-bg\">".concat(content, "</div>");
  return tile;
}

function createIOLActionTile(icon, content, url, id) {
  var tile = "\n                <div id=\"".concat(id, "-tile\" class=\"iol-tile iol-action\" onclick=\"location.href='").concat(url, "';\">\n                        ").concat(icon, "<br>\n                        ").concat(content, "\n                </div>");
  tile += "\n                <div hidden id=\"".concat(id, "-hover\" class=\"iol-tile iol-action bglight\" onclick=\"location.href='").concat(url, "';\" style=\"display:none;\">\n                        ").concat(icon, "<br>\n                        ").concat(content, "\n                </div>");
  return tile;
}