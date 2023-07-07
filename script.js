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

function createDiv(amount, rowClass) {
    for (let i = 1; i <= amount; i++) {
        const div = document.createElement('div');
        rowClass.appendChild(div);
    };
};

createDiv(16, firstRow);
createDiv(16, secondRow);