//Platform Game and CS20 Project

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600);

let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

//Ball
let player = {
    x: 0,
    y: 0,
    r : 7,
    color: 'blue',
    x_velocity: 0, //move x
    y_velocity: 0, //move y
    alive: true,
}

//Key Events
document.addEventListener("keydown", controller.keyboard);
document.addEventListener('keyup', controller.keyboard);

let controller = {
    left: false,
    right:false,
    left: false,

    //Function named keyboard
    keyboard: function (event) {

        let key_state = (event.type == "keydown")

        switch (event.keyCode) {
            case 65: // left key
                controller.left = key_state;
                break;
            case 87: // up key
                controller.up = key_state;
                break;
            case 68: // right key
                controller.right = key_state;
                break;
            case 32: // right key
        }
    }
}

//Gravity
player.y_velocity += 1.5;

//Friction
player.x_velocity *= 0.9;
player.y_velocity *= 0.9;

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    //Logic

    //Keyboard Controls
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

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Draw ball
    ctx.fillStyle = player.color;
    ctx.fillCircle(player.x, player.y, player.r);

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

