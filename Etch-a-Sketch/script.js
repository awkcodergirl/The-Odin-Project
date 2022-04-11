function createDiv(){
    const div = document.createElement("div");
    // div.appendChild(document.createTextNode("here"));
    div.setAttribute('style','border: 1px solid blue');
    return div;
}

const grid = document.querySelector(".screen");
let docFrag = document.createDocumentFragment();

for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){ 
        docFrag.appendChild(createDiv());
    }
}

grid.appendChild(docFrag);
