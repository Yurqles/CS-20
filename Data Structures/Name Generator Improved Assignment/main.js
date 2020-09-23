//Name Generator

//Name Placement
let pEl = document.getElementById('p1');
let breakLine = document.getElementById('hr1');
let namePaths;
let nameIndex = 0;

//Event Listener
document.getElementById('btn1').addEventListener('click', randomName);
document.getElementById('btn2').addEventListener('click', allNames);

fetch('nicknames.txt').then(convertData).then(processData);

function convertData(rawData) {
    //Get the nicknames from the text file and covert it into an array of characters
    return rawData.text();
}

function processData(data) {
    namePaths = data.split('\r\n');
}

function allNames() {
    //Get the first and last name
    let firstName = document.getElementById('textInput1').value;
    let lastName = document.getElementById("textInput2").value;

    //Add all names
    for (let i = 0; i < namePaths.length; i++) {
        document.getElementById('p1').innerHTML += firstName + ' ' + namePaths[i] + ' ' + lastName  + '<br>';
    }
} 

function randomName() { 
    //Get the first and last name
    let firstName = document.getElementById('textInput1').value;
    let lastName = document.getElementById("textInput2").value;

    //Get a random index
    nameIndex = Math.randomInt(0, namePaths.length); 

    //Display the new nickname
    document.getElementById('p1').innerHTML += firstName + ' '  + namePaths[nameIndex] + ' '  + lastName  + '<br>';
}