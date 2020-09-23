//Make it Snow

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600)

//Snowflakes
let snowflakes = []
for (let n = 0; n < 80; n++) {
    snowflakes.push({
        x: Math.randomDec(0, 800),
        y: Math.randomDec(0, 600),
        r: Math.randomDec(5, 12),
        col: 'white',
    });
    
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Draw Snowflake
    for (let i = 0; i < snowflakes.length; i++) {
        //Move Snowflakes
        snowflakes[i].x += Math.randomDec(-2, 2);
        snowflakes[i].y += Math.randomDec(-5, -1);

        //Draw Snowflake
        ctx.strokeStyle = snowflakes[i].col;
        ctx.fillCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].r, 0, Math.PI * 2);

    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

//Key Events
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('click', mouseDownHandler);

function keyDownHandler(event) {
    if (event.code == 'ArrowDown') {
        //Remove a snowflake
        snowflakes.pop();
    }
}

function mouseDownHandler(event) {
    //Add a snowflake if clicked on open space, remove a snowflake if snowflake is clicked
    let remove = false
    for (let i = 0; i < snowflakes.length; i++) {
        if (ctx.mouseInCircle(snowflakes[i])) {
            snowflakes.splice(i, 1);
            remove = true;
        }
    }

    if (!remove) {
        //Add a random snowflake
        snowflakes.push ({
            x: mouseX,
            y: mouseY,
            r: Math.randomDec(5, 12),
            col: 'white',
        })
    }


}



