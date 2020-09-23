// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", clap);
document.addEventListener("keydown", hihat);
document.addEventListener("keydown", kick);
document.addEventListener("keydown", openhat);
document.addEventListener("keydown", boom);
document.addEventListener("keydown", ride);
document.addEventListener("keydown", snare);
document.addEventListener("keydown", tom);
document.addEventListener("keydown", tink);


// Event Function
function playSound(event, keyNum, note, sound) {
    console.log(event.keyCode);

    if (event.keyCode == keyNum) { // "a"
        // Play Sound
        let audio = document.getElementById(sound);
        audio.currentTime = 0;
        audio.play();
        document.getElementById(note).classList.add("playing");
    }
}

function clap() {
    playSound(event, '65', 'A', 'clap');
}
function hihat() {
    playSound(event, '83', 'S', 'hihat')
}
function kick() {
    playSound(event, '68', 'D', 'kick')
}
function openhat() {
    playSound(event, '70', 'F', 'openhat')
}
function boom() {
    playSound(event, '71', 'G', 'boom')
}
function ride() {
    playSound(event, '72', 'H', 'ride')
}
function snare() {
    playSound(event, '74', 'J', 'snare')
}
function tom() {
    playSound(event, '75', 'K', 'tom')
}
function tink() {
    playSound(event, '76', 'L', 'tink')
}

//event,
// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End Function
function removePlaying(event) {
    event.target.classList.remove("playing");
}