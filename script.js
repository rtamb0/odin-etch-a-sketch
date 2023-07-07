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
            divRow.appendChild(div);
        };
    }
};

createDiv(16, 16);