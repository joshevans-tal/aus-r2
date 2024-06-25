// init data
// This script will get the current year and add to copyright text
const d = new Date();
let year = d.getFullYear();
var copyright = year + " © Fund name Pty Ltd, ABN 11 222 333 444 | AFS License No. 123456";

function createFooter(id){
    // update data - static for now

    var str = '<div id="footer" class="footer">';
    str += '<div class="left">'+ copyright +'</div>';
    str += '<div class="right"><a href="#" class="footer-link">Disclaimer</a> | <a href="#"  class="footer-link">Privacy</a></div>';
    str += '</div>'

    document.getElementById(id).innerHTML = str;
}

// Include this script in the head
/*

ADD TO HTML
<div class='footer'></div>

<script>
    // FOOTER - id only
    createFooter("footer");
</script>

*/ 

/* 
HTML REF

<div class='footer'>
    <div class='left'>2021 © Fund name Pty Ltd, ABN 11 222 333 444 | AFS License No. 123456</div>
    <div class='right'><a href='#' class='footer-link'>Disclaimer</a> | <a href='#' class='footer-link'>Privacy</a></div>
</div>

*/

