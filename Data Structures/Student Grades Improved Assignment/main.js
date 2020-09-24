// STUDENT GRADES

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let grades = [];
for (let n = 0; n < 50; n++) {
    grades.push(Math.randomInt(0, 100));
}
let max = 100; // grade values should be b/t 0 and max

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / grades.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < grades.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = grades[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);        
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// MAIN MENU EVENTS

//Global Variable
let amount = 0

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'first40') {
        // Set the grade of the first student to 40.
        outputEl.innerHTML = 'First grade to 40';
        grades.splice(0, 1, 40);
    } else if (selection == 'last50') {
        // Set the grade of the last student to 50. 
        outputEl.innerHTML = 'Last grade to 50';
        grades.splice(11, 1, 50);
    } else if (selection == 'random100') {
        // Set the grade of a random student to 100.
        outputEl.innerHTML = 'Random grade to 100';
        grades.splice(Math.randomInt(0, grades.length), 1, 100);
    } else if (selection == 'addRandom') {
        // Add a random grade between 0 and 100 to the end of the array.
        outputEl.innerHTML = 'Add random grade';
        grades.splice(Math.randomInt(grades.length + 1, 1.797693134862315E+308), 1, Math.randomInt(0, 100))
    } else if (selection == 'removeLast') {
        // Remove the last grade.
        outputEl.innerHTML = 'Remove the last grade';
        grades.pop()
    } else if (selection == 'count50') {
        // Count how many grades are below 50.  Output the result.
        outputEl.innerHTML = 'Count grades below 50';
        for (let i = grades.length - 1; i >= 0; i--) {
            if (grades[i] < 50) {
                amount += 1;
        }
    }
    document.getElementById('output').innerHTML = amount; 
    } else if (selection == 'change50') {
        // Change all grades that are below 50 to be equal to 50.
        outputEl.innerHTML = 'Change low grades to 50';
        for (let i = grades.length - 1; i >= 0; i--) {
            if (grades[i] < 50) {
                grades.splice(i, 1, 50)
            }
        }
    } else if (selection == 'increase10') {
        // Increase each grade by 10%.
        outputEl.innerHTML = 'Increase all grades by 10%';
        for (let i = grades.length - 1; i >= 0; i--) {
            if (grades[i] < 100) {
                grades.splice(i, 1, grades[i] + 10)
            }
        }
    } else if (selection == 'decrease10') {
        // Decrease each grade by 10%.
        outputEl.innerHTML = 'Decrease all grades by 10%';
        for (let i = grades.length - 1; i >= 0; i--) {
            if (grades[i] > 0) {
                grades.splice(i, 1, grades[i] - 10)
            }
        }
    } else if (selection == 'remove50') {
        // Remove all grades that are below 50.
        outputEl.innerHTML = 'Remove grades below 50';
        for (let i = grades.length - 1; i >= 0; i--) {
            if (grades[i] <= 50) {
                grades.splice(i, 1, 0)
            }
        }
    } 
}

//Key Events
document.addEventListener('keydown', keydownHandler);

//Reset by pressing r
function keydownHandler(event) {
    console.log(event.code) 
    if (event.code ==  'KeyR') {
        for (let n = 0; n < 50; n++) {
            grades.push(Math.randomInt(0, max));
        }
        grades.splice(0, grades.length / 2);
    }
}