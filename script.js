const divsContainer = document.querySelector('#square-divs');
const firstRow = document.querySelector('.first-row');
const secondRow = document.querySelector('.second-row');

// Create divs 16 times with loop

// FOR each loop
    // Create div element
    // Append it to divsContainer
    // Repeat 16 times
// END FOR

// Create loop that creates the row container

function createDiv(amount, row) {
    for (let i = 1; i <= row; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row-divs');
        divsContainer.appendChild(divRow);
        for (let i = 1; i <= amount; i++) {
            const div = document.createElement('div');
            divRow.appendChild(div);
        };
    }
};

createDiv(16, 16);