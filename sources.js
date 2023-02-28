//create a container that will contain grid
const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
const container = document.createElement("div");
container.setAttribute("id", "container");
//make it use flex item
container.style.width = "480px";
container.style.height = "480px";
container.style.display = "flex";
container.style.flexWrap = "wrap";


//add event listener to ask user for grid size
const blackGrid = document.querySelector("#blackGrid");
blackGrid.addEventListener("click",function(event){
    let size = prompt("Enter the size of the grid");
    if (size >= 100){
        alert("Choose a size less than 100");
        return;
    }
    // remove existing grid squares
    container.innerHTML = "";
    // create new grid squares
    for (let i = 1 ; i <= size*size ; i++) {
        const cell = document.createElement("div");
        cell.style.width = `${480/size}px`;
        cell.style.height = `${480/size}px`;
        cell.style.boxSizing = "border-box"
        cell.style.border = "1px solid black";
        container.appendChild(cell);
        //add a hover to cells
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black';
        });
    }
});

const colorfulGrid = document.querySelector("#colorfulGrid");
colorfulGrid.addEventListener("click",function(event){
    let size = prompt("Enter the size of the grid");
    if (size >= 100){
        alert("Choose a size less than 100");
        return;
    }
    // remove existing grid squares
    container.innerHTML = "";
    // create new grid squares
    for (let i = 1 ; i <= size*size ; i++) {
        const cell = document.createElement("div");
        cell.style.width = `${480/size}px`;
        cell.style.height = `${480/size}px`;
        cell.style.boxSizing = "border-box"
        cell.style.border = "1px solid black";
        container.appendChild(cell);
        //add a hover to cells
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    }
});


//create a loop for creating a grid square
for (let i = 1 ; i <= 16*16 ; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${480/16}px`;
    cell.style.height = `${480/16}px`;
    cell.style.boxSizing = "border-box" 
    cell.style.border = "1px solid black"
    container.appendChild(cell);
    //add a hover to cells
    cell.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
      });
}




//append the container
body.appendChild(container);


