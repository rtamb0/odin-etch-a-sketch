// Create divs with loop
// Create loop that creates the row container

const divMessage = document.createElement('div');

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
    };
    divMessage.textContent = `${amount} x ${amount}`
    const divStatus = document.querySelector('.change-grid');
    divStatus.appendChild(divMessage);
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

let color = 'black';
const colorMessage = document.createElement('div');

const colorSection = document.querySelector('.change-color');
colorSection.appendChild(colorMessage);

colorMessage.textContent = `You are now using ${color}!`

const colorButton = document.querySelectorAll('.change-color');
colorButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        colorMessage.textContent = `You are now using ${color}!`
    })
})

function penDraw() {
    const gridDiv = document.querySelectorAll('.grid-divs');
    let isClicked = false;
    gridDiv.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.addEventListener('mousedown', (e) => {
                isClicked = true;
                switch (color) {
                    case 'black':
                        div.style.backgroundColor = '#000000';
                        break;
                    case 'red':
                        div.style.backgroundColor = '#bf1520';
                        break;
                    case 'green':
                        div.style.backgroundColor = '#13b804';
                        break;
                    case 'blue':
                        div.style.backgroundColor = '#0e37cc';
                        break;
                    case 'yellow':
                        div.style.backgroundColor = '#ccb30e';
                        break;
                    case 'purple':
                        div.style.backgroundColor = '#670ecc';
                        break;
                    case 'orange':
                        div.style.backgroundColor = '#cc640e';
                        break;
                    case 'brown':
                        div.style.backgroundColor = '#422f1e';
                        break;
                    case 'grey':
                        div.style.backgroundColor = '#5c5b5a';
                        break;
                };
            });
            div.addEventListener('mouseup', (e) => {
                isClicked = false;
            });
            if (isClicked === true) {
                switch (color) {
                    case 'black':
                        div.style.backgroundColor = '#000000';
                        break;
                    case 'red':
                        div.style.backgroundColor = '#bf1520';
                        break;
                    case 'green':
                        div.style.backgroundColor = '#13b804';
                        break;
                    case 'blue':
                        div.style.backgroundColor = '#0e37cc';
                        break;
                    case 'yellow':
                        div.style.backgroundColor = '#ccb30e';
                        break;
                    case 'purple':
                        div.style.backgroundColor = '#670ecc';
                        break;
                    case 'orange':
                        div.style.backgroundColor = '#cc640e';
                        break;
                    case 'brown':
                        div.style.backgroundColor = '#422f1e';
                        break;
                    case 'grey':
                        div.style.backgroundColor = '#5c5b5a';
                        break;
                };
            };
        });
    });
};

function resetDraw() {
    const gridDiv = document.querySelectorAll('.grid-divs');
    gridDiv.forEach((div) => {
        div.removeAttribute('style');
    })
};

function penEraser() {
    const gridDiv = document.querySelectorAll('.grid-divs');
    let isClicked = false;
    gridDiv.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.addEventListener('mousedown', (e) => {
                isClicked = true;
                div.removeAttribute('style');
            });
            div.addEventListener('mouseup', (e) => {
                isClicked = false;
            });
            if (isClicked === true) {
                div.removeAttribute('style');
            };
        });
    });
};

createDiv(16);
penDraw();