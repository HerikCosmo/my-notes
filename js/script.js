window.addEventListener('load', function(){
    let note = document.getElementById('note')
    let addNote = document.getElementById('addNote')
    let clearNotes = document.getElementById('clearNotes')
    let content = document.getElementById('content')
    let notes = JSON.parse(localStorage.getItem("notes")) ?? []
    let openModal = document.getElementById("open-modal")
    let modal = document.getElementById('newNote')
    let modalEdit = document.getElementsByClassName('modal')[1]
    list()

    openModal.addEventListener('click', function(){
        modal.style.display = "flex";
    })

    closeModal = () => modal.style.display = "none"
    
    
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
                    <input type='hidden' value="${i}">
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
        note.value = oldNote.replaceAll('<br>', '\n')
        modalEdit.style.display = "flex";
        document.getElementById('updateNote').addEventListener('click', function(){
            notes[indice] = note.value
            localStorage.setItem("notes", JSON.stringify(notes))
            list()
        })
    }


    // document.addEventListener('storage')
    
})

