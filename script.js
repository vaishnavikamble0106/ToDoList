const input = document.getElementById("input");
const button = document.getElementById("button");
const notes = document.getElementById("notes");
let notesArray = [];

button.addEventListener("click", function() { 
  let note = input.value;
  if (note) { 
    notesArray.push(note);
    input.value = ""; 
    renderNotes();
  }
});

function renderNotes() {
  notes.innerHTML = "";
  for (let i = 0; i < notesArray.length; i++) {
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerText = notesArray[i];

    let editSpan = document.createElement("span");
    editSpan.className = "edit";
    editSpan.innerHTML = "<i class='fas fa-edit'></i>";
    editSpan.addEventListener("click", (function(i) {
      return function() {
        input.value = notesArray[i];
        notesArray.splice(i, 1);
        renderNotes();
      };
    })(i));

    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    deleteSpan.innerHTML = "<i class='fas fa-trash'></i>";
    deleteSpan.addEventListener("click", (function(i) {
      return function() {
        notesArray.splice(i, 1);
        renderNotes();
      };
    })(i));

    noteDiv.appendChild(editSpan);
    noteDiv.appendChild(deleteSpan);
    notes.appendChild(noteDiv);
  }
}
