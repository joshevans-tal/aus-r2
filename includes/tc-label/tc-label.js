/*
----------------------------------------------------------------------------
////// TC FORM LABEL - By Josh Evans
----------------------------------------------------------------------------

Simple return script providing a form label with an education tooltip (?)

*/


function tcLabel(txt, forId, tooltip){
    let content = ``;

    if(tooltip != ''){
    content += `<label for="${forId}" class="label-icon" >${txt} 
    <span class="icon-bg"onclick="myTooltip(this,'${tooltip}')"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM10 7C10 6.44772 10.4477 6 11 6H11.01C11.5623 6 12.01 6.44772 12.01 7C12.01 7.55228 11.5623 8 11.01 8H11C10.4477 8 10 7.55228 10 7ZM11 10C11.5523 10 12 10.4477 12 11V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V11C10 10.4477 10.4477 10 11 10Z" fill="black"/>
</svg></span>
</label>`;
} else {
    content += `<label for="${forId}" class="label-icon" >${txt} 
</label>`;
}
    
    return content;
}