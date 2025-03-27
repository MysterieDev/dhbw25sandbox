let oldName = "Platzhalter";
let newName = "Platzhalter";

const PREFIX = "Name ändert sich von: ";
const SUFFIX = " auf: ";

let nameHistory = [];

function changeName(event) {

    const isAnredeFrau = document.querySelector("#isfemale").checked
    const isFormellChecked = document.querySelector("#isformell").checked


    oldName = newName;
    newName = addAnrede(event.target.value, isAnredeFrau, isFormellChecked);

    // create Object Entry
    const historyObject = {
        name: event.target.value,
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