const container = document.querySelector(".container");
const button = document.querySelector(".create-grid");
const input = document.querySelector("#grid-size");

let gridSize = 16;
input.value = gridSize;


function generateRandomColor() {
    let maxColorVal = 0xFFFFFF;
    let randomNum = Math.random() * maxColorVal;
    randomNum = Math.floor(randomNum);
    //randomNum is in integer format, converts back to a string as a HEX number.
    let randomColor = randomNum.toString(16);
    randomColor = randomColor.toUpperCase();
    return `#${randomColor}`;
}

function newGrid() {
    //clear entire contents inside container first
    (input.value <= 100 && input.value >= 1) ? gridSize = input.value : alert("Invalid number!")

    container.innerHTML = "";
    for(let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < gridSize; j++){
            let column = document.createElement("div");
            column.classList.add("box");
            row.appendChild(column);


            column.addEventListener("mouseenter", () =>{
                if (column.classList.contains('colored')) {
                    column.style.opacity = parseFloat(column.style.opacity) + 0.1;
                } else { 
                    let color = generateRandomColor();
                    column.style.backgroundColor = color;
                    column.style.opacity = 0.1;
                    column.classList.add('colored')
                }
            });
        }
    }
}

//On Enter keypress trigger same event as button 
input.addEventListener("keypress", (e) =>{
    if (e.key === "Enter") {
        button.click();
    }
});


newGrid();
button.addEventListener("click", newGrid);

