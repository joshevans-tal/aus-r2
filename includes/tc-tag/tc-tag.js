// TC TAG - By Josh Evans

function tcTag(str, status){
    let content = ``;
    // window.alert(`I'm a needy tag!`);
    content += `<span class="tc-tag ${status}">${str}</span>`;

    return content;
}