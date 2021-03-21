window.addEventListener('load', function(){
    let note = document.getElementById('note')
    let addNote = document.getElementById('addNote')
    let clearNotes = document.getElementById('clearNotes')
    let content = document.getElementById('content')
    let notes = JSON.parse(localStorage.getItem("notes")) ?? []
    let openModal = document.getElementById("open-modal")
    let closeModal = document.getElementById("close-modal")
    let modal = document.getElementsByClassName('modal')[0]
    list()

    openModal.addEventListener('click', function(){
        modal.style.display = "flex";
    })

    closeModal.addEventListener('click', function(){
        modal.style.display = "none";
    })
    
    addNote.addEventListener('click', function () {
        let key = "notes"
        let newNote = note.value.replaceAll('\n','<br>')
        notes.push(newNote)
        let value = JSON.stringify(notes)
        localStorage.setItem(key, value)
        note.value = ''
        list()
    })

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

    editNote = function(indice){
        let oldNote = notes[indice]
        note.value = oldNote
        modal.style.display = "flex";

    }

    // document.addEventListener('storage')
    
})

