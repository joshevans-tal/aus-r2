function createCoverItem(){
    // !!! requires utilities.js 

    let value = 260000

    let str = `<div class="row">`;
        str += `<span class="label">`;
        str += `<img src="../images/icons/indent-arrow.svg" class="sub-icon" />`;
        str += `<a onclick="dictionary('text');">Fixed Cover</a>`;
        str += `</span>`;
        str += `<span class="cover-value">${formatCurrency(value)}</span>`;
        str += `</div>`;

        // document.getElementById(id).innerHTML = str;
        return str;
}

// id, label, coverType, value