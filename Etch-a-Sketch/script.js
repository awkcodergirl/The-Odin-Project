// function that creates divs and appends them the the grid
function createDiv(){
    const div = document.createElement("div");
    div.className = "gridSquare";
    // div.setAttribute("style", "border: 1px solid blue");
    return div;
}

// function that gets color from the color picker
let color; 
function colorPicker(){
    color = document.querySelector(".colorPicker").value;
    console.log(color);
}

// function that records the slider value
function changeResolution(){
    let range = document.querySelector(".slider").value;
    console.log(range);
    // const screen = document.querySelector(".screen");
    // for (let i = 1; i <= 16; i++){
    //     for (let j = 1; j <= 16; j++){ 
    //         screen.appendChild(createDiv());
    //     }
    // }
}



const screen = document.querySelector(".screen");

let resolution = changeResolution();
console.log("here");
console.log("range: " + resolution);
for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){ 
        screen.appendChild(createDiv());
    }
}
// screen.setAttribute("style","grid-template-columns: repeat(" + range + ", 1fr)");


// hover over a div and change its color
screen.addEventListener('mouseover', (e) => {
    const square = e.target;
    if (square.getAttribute('class') === "gridSquare"){
        square.style.backgroundColor = color;
    }    
});

