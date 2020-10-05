//Project

//Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
// 40 rows and 34 columns
initGraphics(640, 544)

let map = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ]

let player = {
    x: 50,
    y: 447,
    w: 32,
    h: 32,
    x_velocity: 0, // move x
    y_velocity: 0, //move y 
    alive : true,
    jumping: false,
}

let controller = {
    left: false,
    right: false,
    up: false,
    //Function named keyboard
    keyboard: function (event) {

        let key_state = (event.type == "keydown")

        switch (event.keyCode) {
            case 65: // a key
                controller.left = key_state;
                break;
            case 87: // w key
                controller.up = key_state;
                break;
            case 68: // d key
                controller.right = key_state;
                break;
            case 83: // s key
                controller.down = key_state;
            break;
        }
    }
};

document.addEventListener("keydown", controller.keyboard);
document.addEventListener('keyup', controller.keyboard);

//Spritesheet 16 x 16
let spriteSheetImg = document.getElementById('sprite-sheet');
let spriteY = 0;
let spriteX = 66;


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    //Logic
    // KEYBOARD CONTROLS
    player.x += player.x_velocity;
    player.y += player.y_velocity;

    if (controller.up && player.jumping == false) {
        player.y_velocity -= 20;
        player.jumping = true;
    }
    if (controller.left) {
        player.x_velocity -= 0.6;
    }
    if (controller.right) {
        player.x_velocity += 0.6;
    }
    //If the keys are active these statements will make the player move

    //Gravity
    player.y_velocity += 1.3;

    //Friction
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    //Make the player stay within the area
    if (player.y > 447) {
        player.y = 447;
        player.jumping = false;
    } 
    if (player.x < -10) {
        player.x = -10;
    } else if (player.x > 630) {
        player.x = 630;
    }

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Draw a ground
    ctx.strokeStyle = 'black';
    ctx.line(0, 480, 640, 480);
    ctx.stroke()

    //Draw the player
    ctx.drawImage(spriteSheetImg, spriteX, spriteY, 16, 16, player.x, player.y, player.w, player.h)

    // Request another Animation Frame
    requestAnimationFrame(draw);
}
