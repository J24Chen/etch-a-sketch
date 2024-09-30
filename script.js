const container = document.querySelector(".container")
const button = document.querySelector(".create-grid");

let gridSize = 16;

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
                let color = generateRandomColor();
                column.style.backgroundColor = color;
                console.log(color);
            });
        }
    }
}




newGrid();
button.addEventListener("click", newGrid);

