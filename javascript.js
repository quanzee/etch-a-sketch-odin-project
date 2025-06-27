const grid = document.querySelector(".grid");
const gridBtn = document.querySelector("#change-grid");
const refreshBtn = document.querySelector("#refresh");

function drawGrid(userInput = 16) {
    grid.innerHTML = '';
    const squareWidth = 480/userInput;
    
    for (let i = 0; i < userInput; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.display = "flex";
    
        for (let j = 0; j < userInput; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareWidth}px`;
            square.style.border = '1px solid black';
            square.style.boxSizing = 'border-box';
    
            square.style.backgroundColor = 'black';
            square.style.opacity = 0;

            square.addEventListener('mouseenter', () => {
                let currentOpacity = parseFloat(square.style.opacity);
                if (currentOpacity < 1) {
                    square.style.opacity = Math.min(currentOpacity + 0.1, 1);
                }
            });
    
            row.appendChild(square);
        }
    
        grid.appendChild(row);
    
    };
};

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

let userInput = 16;
drawGrid(userInput);

gridBtn.addEventListener('click', () => {
    const input = prompt("New grid size");
    if (Number(input) > 100) {
        alert("The maximum grid size is 100x100.");
    }
    else if (Number(input) < 0) {
        alert("Please enter a positive number.");
    }
    else {
        drawGrid(Number(input));
        userInput = input;
    }
});

refreshBtn.addEventListener('click', () => {
    grid.innerHTML = '';
    drawGrid(userInput);
});


    

