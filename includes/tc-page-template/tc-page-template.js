/*
-------------------------------------------------------------
This script will add a html structure to the body element
then build a navbar, header, body container and footer

USAGE:
createPage(
    heading,      // string - page header
    subHead,      // string - header sub
    headerStyle,  // string - header style default or bglight
    windowTitle   // string - page title 
    ); 

To add elements to the page
reference id="content-container"
-------------------------------------------------------------
*/

let pageTemplate = ``;
        pageTemplate += `<div id="page-container" class="page-container bglight">
        <div id="navbar"></div>
        <div id="header"></div>
        <!-- CONTENT AREA -->
        <div id="content-container" class="body-container elevation-medium"></div>
        <div id="footer"></div>  
    </div>`;

document.body.innerHTML += pageTemplate;

function createPage(heading,subHead, headerStyle, windowTitle){
    // Set up page
    createNavbar(['Demo','Super2'], "index.html", "navbar");
    createHeader(
        heading, // title
        subHead, // subhead
        'header',// id
        headerStyle); // style - 'default' or 'bglight'
    createFooter('footer');

    // change the page title on the browser window
    if(windowTitle){
        document.title = windowTitle;
    }

    if(headerStyle=="bglight"){
        document.getElementById('page-container').classList.remove("bglight");
    }
}

function removeBGColor(){
    window.alert("headerStyle = "+headerStyle);
    document.body.classList.remove("bglight");
}

/*
-------------------------------------------------------------
ADD THIS SCRIPT AT THE END OF THE HTML BODY
-------------------------------------------------------------
        ||
        ||   THEN
        VV
-------------------------------------------------------------
ADD THESE SCRIPT TO YOUR HTML DOC HEAD
-------------------------------------------------------------
<script type="text/JAVASCRIPT" src="../includes/tc-navbar/tc-navbar-01.js"></script>
<script type="text/JAVASCRIPT" src="../includes/tc-header/tc-header.js"></script>
<script type="text/JAVASCRIPT" src="../includes/tc-footer/tc-footer.js"></script>
-------------------------------------------------------------
*/