let oldName = "Platzhalter";
let newName = "Platzhalter";

const PREFIX = "Name ändert sich von: ";
const SUFFIX = " auf: ";

let nameHistory = [];

function changeName() {
    const isAnredeFrau = document.querySelector("#isfemale").checked
    const isFormellChecked = document.querySelector("#isformell").checked
    const nachname = document.querySelector("#nachname").value;
    const vorname = document.querySelector("#vorname").value;

    if (!isInputValid(vorname, nachname)) {
        alert("Bitte gebe einen Namen ein.");
        return; // Funktion wird beendet
    }

    oldName = newName;
    newName = addAnrede(vorname, nachname, isAnredeFrau, isFormellChecked);

    // create Object Entry
    const historyObject = {
        name: nachname,
        isFormell: isFormellChecked,
        isAnredeFrau,
        anrede: newName
    }

    nameHistory.push(historyObject);
    console.log(nameHistory);

    changeHtml();
}

function changeHtml() {
    document.querySelector("#oldname").innerHTML = "";

    for (let element of nameHistory) {
        document.querySelector("#oldname").innerHTML += element.anrede + "<br>"
    }

    document.querySelector("#newname").innerText = newName;
}

function isInputValid(vorname, nachname) {
    if (vorname.trim().length === 0 || nachname.trim().length === 0) {
        return false
    }
    return true
}

function addAnrede(vorname, nachname, isFemale, isFormell) {

    if (!isFormell) {
        return "Hey " + vorname;
    }

    if (isFemale) {
        return "Sehr geehrte Frau " + nachname;
    }
    else {
        return "Sehr geehrter Herr " + nachname;
    }
}

document.querySelector("h1").classList.add("fontblue");

const anredeForm = document.querySelector("#mailbastler_form");

anredeForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    changeName();
})

const previewInputs = ["#isfemale", "#isformell", "#nachname", "#vorname"];

previewInputs.forEach((inputid) => {
    document.querySelector(inputid).addEventListener("input", () => {
        updatePreview();
    })
})

function updatePreview(){
        const isAnredeFrau = document.querySelector("#isfemale").checked
        const isFormellChecked = document.querySelector("#isformell").checked
        const nachname = document.querySelector("#nachname").value;
        const vorname = document.querySelector("#vorname").value;
        const previewContent = addAnrede(vorname, nachname, isAnredeFrau, isFormellChecked);
        document.querySelector("#preview").innerText = previewContent;
}

const selectRef = document.querySelector("#vorname_preselect")

fetch("http://localhost:5500/names.json")
.then(res => res.json())
.then(jsonArr => {
    jsonArr.forEach((name)=>{
        const option = document.createElement("option");
        option.value = name;
        option.text = name;

        selectRef.appendChild(option);
    })
});

selectRef.addEventListener("change", (ev) =>{
    document.querySelector("#vorname").value = selectRef.value;
    updatePreview();
})

