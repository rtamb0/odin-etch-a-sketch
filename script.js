const divsContainer = document.querySelector('#square-divs');
const div = document.createElement('div');

// Create divs 16 times with loop

// FOR each loop
    // Create div element
    // Append it to divsContainer
    // Repeat 16 times
// END FOR

for (let i = 1; i <= 16; i++) {
    divsContainer.appendChild(document.createElement('div'));
}