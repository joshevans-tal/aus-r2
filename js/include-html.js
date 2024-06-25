
function includeHTML() {
    var placeholders = document.querySelectorAll('[include-html]');
    placeholders.forEach(function(elmnt) {
        var file = elmnt.getAttribute('include-html');
        if (file) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = sanitizeHTML(this.responseText);
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute('include-html');
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
        }
    });
}

function sanitizeHTML(html) {
    // Remove script tags from the HTML content
    var sanitizedContent = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    return sanitizedContent;
}

includeHTML();
