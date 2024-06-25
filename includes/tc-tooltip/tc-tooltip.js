


function tcTooltip(txt, tooltip){
   
   let content = ``;

   content += `<div class="tc-tooltip">${txt}<span class="tc-tooltiptext">${tooltip}</span></div>`;

   return content;

}



var tExists = false;

function myTooltip(sender, txt){

let myPos = sender.getBoundingClientRect();
if(tExists == false){
	
// Create element:
const para = document.createElement("div");
para.innerHTML = `<span id='close-tooltip'>–</span><p class='small'>${txt}</p>`;
para.id = "tooltip";
para.classList.add('tooltiptest');

// Append to body:
document.body.appendChild(para);

// update position:
para.style.left = `${myPos.left-32}px`;
para.style.top = `${((myPos.top + window.scrollY) - para.offsetHeight)-4}px`;
para.onclick = function() {removeTooltip(para) };

tExists = true;

} else {
const para = document.getElementById("tooltip");
para.remove();
tExists = false;
}

}

function removeTooltip(id){
    id.remove();
    tExists = false;
}
