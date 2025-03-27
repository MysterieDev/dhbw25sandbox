let oldName = "Platzhalter";
let newName = "Platzhalter";

const PREFIX = "Name ändert sich von: ";
const SUFFIX = " auf: ";

let nameHistory = [];

function changeName() {

    const isAnredeFrau = document.querySelector("#isfemale").checked
    const isFormellChecked = document.querySelector("#isformell").checked
    const newnameInputValue = document.querySelector("#newname_input").value;

    if(!isInputValid(newnameInputValue)){
        alert("Bitte gebe einen Namen ein.");
        return; // Funktion wird beendet
    }

    oldName = newName;
    newName = addAnrede(newnameInputValue, isAnredeFrau, isFormellChecked);

    // create Object Entry
    const historyObject = {
        name: newnameInputValue,
        isFormell: isFormellChecked,
        isAnredeFrau,
        anrede: newName
    }

    nameHistory.push(historyObject);
    console.log(nameHistory);
   
    changeHtml();
}

function changeHtml(){
    document.querySelector("#oldname").innerHTML = "";

    for(let element of nameHistory){
      document.querySelector("#oldname").innerHTML += element.anrede + "<br>"
    }

    document.querySelector("#newname").innerText = newName;
}

function isInputValid(nameValue){
    if(nameValue.trim().length === 0){
        return false
    }
    return true
}

function addAnrede(name, isFemale, isFormell) {

    if (!isFormell) {
        return "Hey " + name;
    }

    if (isFemale) {
        return "Sehr geehrte Frau " + name;
    }
    else {
        return "Sehr geehrter Herr " + name;
    }
}

document.querySelector("h1").classList.add("fontblue");

const anredeForm = document.querySelector("#mailbastler_form");

anredeForm.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    changeName();
})