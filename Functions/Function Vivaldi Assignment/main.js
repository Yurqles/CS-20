// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('springBtn').addEventListener('click', setSpring);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('summerBtn').addEventListener('click', setSummer);

//Get Which Season It Is
let season = document.getElementById('season-text').value;

function seasonSearch(color, season) {
    //Set Image
    document.getElementById('main-img').src = 'images/' + season + '.jpg';
    //Set Song
    document.getElementById('song').src = 'songs/vivaldi-' + season + '.mp3';
    //Set button
    document.getElementById('button').classList.remove('activebtn');
    document.getElementById(season + 'Btn').classList.add('activebtn');
    //Set season text
    document.getElementById('season-text').innerHTML = season;
    //Set color
    document.body.style.backgroundColor = color;
}

function setSpring() {
    seasonSearch('#0E94D1', 'spring');
}
function setSummer() {
    seasonSearch('#1BA848', 'summer')
}
function setAutumn() {
    seasonSearch('#FE6732', 'autumn')
}
function setWinter() {
    seasonSearch('#1C64B9', 'winter')
}
