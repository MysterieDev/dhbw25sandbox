let oldName = "Platzhalter";
let newName = "Platzhalter";

const PREFIX = "Name ändert sich von: ";
const SUFFIX = " auf: ";

function changeName(event) {

    const isAnredeFrau = document.getElementById("isfemale").checked

    oldName = newName;
    newName = addAnrede(event.target.value, isAnredeFrau);

    document.getElementById("oldname").innerText = oldName;
    document.getElementById("newname").innerText = newName;
}

function addAnrede(name, isFemale) {
    if (isFemale) {
        return "Sehr geehrte Frau " + name;
    }
    else {
        return "Sehr geehrter Herr " + name;
    }
}