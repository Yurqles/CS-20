//Name Generator

//Global Variable
let namePaths = ['the Lazy Koala', 'Superb', 'Freaky', 'Silver', 'the Grande', 'the Petite', 'Yurqle'];
let nameIndex = 0;

//Name gallery
let pEl = document.getElementById('p1');
let breakLine = document.getElementById('hr1');


//Event Listeners
document.getElementById('btn1').addEventListener('click', randomName);
document.getElementById('btn2').addEventListener('click', allNames);

function randomName() {
    //Get first and last name
    let firstName = document.getElementById('textInput1').value;
    let lastName = document.getElementById("textInput2").value;

    //Get a random index
    nameIndex = Math.randomInt(0, namePaths.length); 

    //Display the new nickname
    pEl.innerHTML += firstName + ' ' + namePaths[nameIndex] + ' ' +  lastName+ ' <br/>';
}

function allNames() {
    //Get first and last Name
    let firstName = document.getElementById('textInput1').value;
    let lastName = document.getElementById("textInput2").value;
    
    //Add all names
    for (let i = 0; i < namePaths.length; i++) {
        pEl.innerHTML +=  firstName + ' ' + namePaths[i] + ' ' +  lastName + '<br/>';
        
    }
}

