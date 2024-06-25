// This header component builds an html string and populates it to a div with an id
// 
var headerTitle = "Page title";
var headerSub = "Subhead description";
var containerid = "header";

function createHeader(title, sub, id) {

    headerTitle = title;
    headerSub = sub;
    containerid = id;

    str = '<div class="tc-header bglight">';
    str += '<div class="content ">';
    str += '<h1 class="heading1">' + headerTitle + '</h1>';
    str += '<p class="large">' + headerSub + '</p>';
    str += '</div></div>'

    document.getElementById(containerid).innerHTML = str;
}


{
    /* ADD TO HTML PAGE

    <div id="header"></div>
    
    <script>
        // script requires container div with id
        createHeader(
            "Let’s discover your cover",
            "View and adjust your life insurance options in as little as 2 mins.",
            // identify container div id
            "header");
    </script> */
}


{
    /* HTML REFERENCE
    
    <div class='tc-header bglight'>
                <div class='content '>
                    <h1 class='heading1'>Your details</h1>
                    <p class='large'>Your personal information below, affects both the cost and type of cover we can offer you. Please make sure that the information below is accurate and complete.</p>
                </div>
                
            </div> */
}
