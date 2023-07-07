const divsContainer = document.querySelector('#square-divs');
const firstRow = document.querySelector('.first-row');
const secondRow = document.querySelector('.second-row');

// Create divs 16 times with loop

// FOR each loop
    // Create div element
    // Append it to divsContainer
    // Repeat 16 times
// END FOR

function createDiv(amount, className) {
    for (let i = 1; i <= amount; i++) {
        const div = document.createElement('div');
        divsContainer.appendChild(div);
        if (className !== undefined) {
            div.classList.add(className);
        };
    };
};

createDiv(16);
createDiv(16);