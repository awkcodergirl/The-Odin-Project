function makeGrid(){
    const grid = document.querySelector(".innerSquare");
    let div;

    for (let i = 1; i <= 16; i++){
        for (let j = 1; j <= 16; j++){
            div = document.createElement("div");
            div.setAttribute('stlye','border: 1px solid black', 'padding: 5px');
            grid.appendChild(div);
        }
    }
}

makeGrid();