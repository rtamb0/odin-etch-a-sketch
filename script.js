const divsContainer = document.querySelector('#square-divs');

// Create divs with loop
// Create loop that creates the row container

function createDiv(amount, row = 1) {
    for (let i = 1; i <= row; i++) {
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

createDiv(16, 16);

const gridDiv = document.querySelectorAll('.grid-divs');

function penDraw() {
    let isClicked = false;
    divsContainer.addEventListener('mousedown', (e) => {
        isClicked = true;
    });
    divsContainer.addEventListener('mouseup', (e) => {
        isClicked = false;
    });
    gridDiv.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            if (isClicked === true) {
                div.classList.add('coloring');
            };
        });
    });
};

penDraw();