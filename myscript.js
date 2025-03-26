let oldName = "Platzhalter";
let newName = "Platzhalter";

const PREFIX = "Name änder sich von: ";
const SUFFIX = " auf: ";

function changeName(event){
    oldName = newName;
    newName = event.target.value;
}