{/* 

// ???????|--- HOW DOES IT WORK ---|???????

The modal uses the standard HTML dialog showModal() function. 
The js function accepts the follow paramenters to build it. 
tcModal(title, content, footer, modalId)

title............... String: Displayed in the modal header
content............. String: Displayed in the modal content area - will auto scroll if required
footer.............. String: use buttons with secondary and primary styles (shown below)
modalId............. String: name of the modal - referenced when opening and closing the modal
_______________________________________________________________________________________________________________________
SHOW THE MODAL from the HTML page - the format is window.dialog-id-name.showModal();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<button class="primary" onclick="window.dialog.showModal();">Open Dialog</button> 

SET UP MODAL CONTENT
_______________________________________________________________________________________________________________________
VAR FOR MODAL FOTTER CTAs (FOR A MODAL WITH id="dialog")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let modal1Footer = `
	<button class="secondary"onclick="window.dialog.close();" aria-label="close">Cancel</button>
	<button class="primary" onclick='window.location.href = "google.com";' aria-label="url">Accept & continue</button>`;

--------------||  BUILD THE MODAL INTO THE PAGE  ||--------------
document.body.innerHTML += tcModal('Duty of reasonable care', dorc, modal1Footer,'dialog');
_______________________________________________________________________________________________________________________
FOOTER CTAs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
A footer will be shown if footer cta is requested - e.g. footer parameter is not an empty string,
_______________________________________________________________________________________________________________________
Example CTAs (FOR A MODAL WITH id="dialog2")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let modal2Footer = `
	<button class="secondary"onclick="window.dialog2.close();" aria-label="close">Cancel</button>
	<button class="primary" onclick='window.location.href = "google.com";' aria-label="url">Accept & continue</button>`;

--------------||  CALLING SCRIPT WILL BUILD THE MODAL INTO THE PAGE  ||--------------
document.body.innerHTML += tcModal('Another modal', dorc, modal2Footer,'dialog2');

*/}


function tcModal(title, content, footer, modalId){
    console.log('modal script is here!');
    let modal = `
    <dialog id="${modalId}" >
        <div class="modal-container">
            <div class="modal-header">
                <span class="modal-title"><h2>${title}</h2></span>
                <button onclick="window.${modalId}.close();" aria-label="close" class="x">✕</button>
            </div>
            
            <div id="modal-content" class="modal-content">${content}</div>`;
    
    if(footer !== ''){
    modal += `<div class="modal-footer" >${footer}</div>`;
    }
    modal += `</div></dialog>`;
    return modal;
}


	
