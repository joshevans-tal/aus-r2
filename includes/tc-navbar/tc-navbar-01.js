// Set text vars
var logoText = ["My","Super"];
var logoText2 = "Super";
var url = "index.html";

function createNavbar(logoTextArray, url, id){
    logoText = logoTextArray;

    var str = '<div class="navbar">';
    str += '<a href="'+url+'">';
    str += '<div class="hamburger"></div>';
    str += '<div class="logo">'

    logoText.forEach(function (textitem) {
        str += '<span>' + textitem + '</span>';
    });

    str += '</div></a></div>';

    document.getElementById(id).innerHTML = str;
}

// document.write("<div class='navbar'>");
// document.write("<a href='/_working/index.html'><div class='hamburger'></div>");
// document.write("<div class='logo'><span>demo</span><span>Supers</span>");
// document.write("</div></a></div>")

{/* <div class="navbar">
    <a href="/_working/index.html"><div class="hamburger"></div>
    <div class="logo">
        <span>demo</span>
        <span>Supers</span>
    </div></a>
</div> */}



// YES - This works and I can include js functions. 
// window.alert("Howdy!");