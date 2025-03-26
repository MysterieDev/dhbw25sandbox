let oldName = "Platzhalter";
let newName = "Platzhalter";

const PREFIX = "Name ändert sich von: ";
const SUFFIX = " auf: ";

let nameHistory = [];

function changeName(event) {

    const isAnredeFrau = document.getElementById("isfemale").checked
    const isFormellChecked = document.getElementById("isformell").checked


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

    document.getElementById("oldname").innerText = oldName;
    document.getElementById("newname").innerText = newName;
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