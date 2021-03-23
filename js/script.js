window.addEventListener('load', function(){
    let note = document.getElementById('noteAdd')
    let clearNotes = document.getElementById('clearNotes')
    let content = document.getElementById('content')
    let notes = JSON.parse(localStorage.getItem("notes")) ?? []
    let updateNote = document.getElementById('updateNote')
    //let noteEdit = document.getElementById("noteEdit")

    let addModal = document.getElementById('newNote')
    let editModal = document.getElementById('updateNoteModal')
    list()

    openAddModal = () => addModal.style.display = "flex"
    closeAddModal = () => addModal.style.display = "none"

    openEditModal = () => editModal.style.display = "flex"
    closeEditModal = () => editModal.style.display = "none"
    
    
    
    addNote = () => {
        let key = "notes"
        let newNote = note.value.replaceAll('\n','<br>')
        notes.push(newNote)
        let value = JSON.stringify(notes)
        localStorage.setItem(key, value)
        note.value = ''
        list()
    }

    function list(){
        content.innerHTML = ''
        if(notes != null){
            for(i = 0; i < notes.length; i++){
                content.innerHTML += `
                <div class="post-it">
                    <p>${notes[i]}<p>
                    <button onclick='editNote(${i})'>edit</button>
                    <button onclick='deleteNote(${i})'>delete</button>
                </div>`
            }
            
        } 
    }

    clearNotes.addEventListener('click', () => {
        localStorage.clear(); 
        notes = []
        list()
    })

    deleteNote = function(indice){
        notes.splice(indice, 1)
        localStorage.setItem("notes", JSON.stringify(notes))
        list()
    }

    editNote = (indice) => {
        let oldNote = notes[indice]
        noteEdit.value = oldNote.replaceAll('<br>', '\n')
        editModal.style.display = "flex";
        updateNote.onclick = console.log(indice)
    }

    // updateNote = () => {
    //     let indice = 
    //     notes[indice] = noteEdit.value.replaceAll('\n','<br>')
    //     console.log(indice, notes[indice], noteEdit.value)
    //     localStorage.setItem("notes", JSON.stringify(notes))
    //     list()
    // }


    // document.addEventListener('storage')
    
})

