// Create divs with loop
// Create loop that creates the row container

function createDiv(amount) {
    for (let i = 1; i <= amount; i++) {
        const divsContainer = document.querySelector('#square-divs');
        const divRow = document.createElement('div');
        divRow.classList.add('row-divs');
        divsContainer.appendChild(divRow);
        for (let i = 1; i <= amount; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-divs');
            divRow.appendChild(div);
        };
    }
};

function changeDiv(number) {
    if (number === undefined || number === null) return;
    amount = Number(number);
    while (amount > 100 || amount < 1 || isNaN(amount) === true) {
        amount = prompt('That number is not appropriate! Try again');
        if (amount === undefined || amount === null) return;
    }
    const divRow = document.querySelectorAll('.row-divs');
    const divsContainer = document.querySelector('#square-divs');
    divRow.forEach((row) => {
        while (row.firstChild) {
        row.removeChild(row.lastChild);
        };
    });
    while (divsContainer.firstChild) {
        divsContainer.removeChild(divsContainer.lastChild);
    }
    createDiv(amount);
    penDraw();
}

function penDraw() {
    const gridDiv = document.querySelectorAll('.grid-divs');
    let isClicked = false;
    gridDiv.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.addEventListener('mousedown', (e) => {
                isClicked = true;
                div.classList.add('coloring');
                console.log(isClicked)
            });
            div.addEventListener('mouseup', (e) => {
                isClicked = false;
                console.log(isClicked)
            });
            if (isClicked === true) {
                div.classList.add('coloring');
                console.log(e)
            };
        });
    });
};

createDiv(16);
penDraw();