//Make it Snow

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600)

//Snowflakes
let snowflakes = []
for (let n = 0; n < 200; n++) {
    snowflakes.push({
        x: Math.randomDec(0, cnv.width),
        y: Math.randomDec(0, cnv.height),
        r: Math.randomDec(3, 8),
        color: 'white',
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
        snowflakes[i].y += Math.randomDec(2, 10);

        //Draw Snowflake
        ctx.fillStyle = snowflakes[i].color;
        ctx.fillCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].r);

        //Teleport Snowflakes to the top if they fall to the bottom
        if (snowflakes[i].y + snowflakes[i].r >= 800) {
            snowflakes[i].y = 0;
        }
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
        if (snowflakes[i].x  == mouseX + snowflakes.r || snowflakes[i].x  == mouseX - snowflakes.r && snowflakes[i].y  == mouseY + snowflakes.r || snowflakes[i].y  == mouseY - snowflakes.r) {
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
