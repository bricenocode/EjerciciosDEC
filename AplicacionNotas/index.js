document.addEventListener("DOMContentLoaded", () => {
    
    const noteInput = document.getElementById("noteInput");
    const addNoteBtn = document.getElementById("addNoteBtn");
    const notesList = document.getElementById("notesList");

    
    const addNote = () => {
       
        const noteText = noteInput.value.trim();
        
        
        if (noteText === "") return;

      
        const noteItem = document.createElement("li");
        noteItem.classList.add("note-item");
        noteItem.textContent = noteText;

     
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Eliminar";
        
       
        deleteBtn.addEventListener("click", () => noteItem.remove());

      
        noteItem.appendChild(deleteBtn);

      
        notesList.appendChild(noteItem);

        
        noteInput.value = "";
    };

 
    addNoteBtn.addEventListener("click", addNote);

    
    noteInput.addEventListener("keydown", (event) => {
       
        if (event.key === "Enter") {
            addNote();
        }
    });
});
