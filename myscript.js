let oldName = "Platzhalter";
let newName = "Platzhalter";

const PREFIX = "Name ändert sich von: ";
const SUFFIX = " auf: ";

function changeName(event){
    oldName = newName;
    newName = addAnrede(event.target.value);

    document.getElementById("oldname").innerText = oldName;
    document.getElementById("newname").innerText = newName;
}

function addAnrede(name){
    return "Sehr geehrter Herr " + name;
}