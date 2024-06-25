// 
var headerTitle = "Page title";
var headerSub = "Subhead description";
var containerid = "header";

function createHeader(title, sub, id, style) {

    headerTitle = title;
    headerSub = sub;
    containerid = id;

    str =  '<div class="tc-header '+ style+ '">';
    str += '<div class="content ">';
    str += '<h1 class="heading1">' + headerTitle + '</h1>';
    str += '<p class="large">' + headerSub + '</p>';
    str += '</div></div>'

    // document.getElementById(containerid).innerHTML = str;
    document.getElementById(containerid).insertAdjacentHTML(
        "afterbegin",
        str,
      );
}

// createHeader("New title", "Custom subheading");

// document.write("<div class='tc-header bglight'>");
// document.write("<div class='content '>");
// document.write("<h1 class='heading1'>Your details</h1>");
// document.write("<p class='large'>Your personal information below, affects both the cost and type of cover we can offer you. Please make sure that the information below is accurate and complete.</p>");
// document.write("</div></div>");


{
    /* <div class='tc-header bglight'>
                <div class='content '>
                    <h1 class='heading1'>Your details</h1>
                    <p class='large'>Your personal information below, affects both the cost and type of cover we can offer you. Please make sure that the information below is accurate and complete.</p>
                </div>
                
            </div> */
}



// YES - This works and I can include js functions. 
// window.alert("Howdy!");