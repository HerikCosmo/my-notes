window.addEventListener('load', function(){
    let noteTxt = document.getElementById('noteAdd') //textarea da nova anotação
    let editNoteTxt = document.getElementById('noteEdit') // textarea da anotação de edição
    let content = document.getElementById('content') // local dos post-it
    let notes = JSON.parse(localStorage.getItem("notes")) ?? [] // notas
    let addModal = document.getElementById('newNote') // modal de adição
    let editModal = document.getElementById('updateNoteModal') // modal de edição

    let controlEdit = [] // controle do indice para edit
    const key = "notes" // chave padrao

    list()

    openAddModal = () => addModal.style.display = "flex"
    closeAddModal = () => addModal.style.display = "none"

    openEditModal = () => editModal.style.display = "flex"
    closeEditModal = () => editModal.style.display = "none"

    addNote = () => {   
        let newNote = noteTxt.value.replaceAll('\n','<br>')
        notes.push(newNote)
        let value = JSON.stringify(notes)
        localStorage.setItem(key, value)
        noteTxt.value = ''
        list()
        closeAddModal()
    }

    clearNotes = () => {
        localStorage.clear(); 
        notes = []
        list()
    }
    
    deleteNote = function(indice){
        notes.splice(indice, 1)
        localStorage.setItem(key, JSON.stringify(notes))
        list()
    }
    
    editNote = (indice) => {
        let oldNote = notes[indice]
        editNoteTxt.value = oldNote.replaceAll('<br>', '\n')
        controlEdit = []
        controlEdit.push(indice)
        editModal.style.display = "flex";
    }

    updateNote = () => {
        let indice = controlEdit[0]
        notes[indice] = editNoteTxt.value.replaceAll('\n','<br>')
        localStorage.setItem(key, JSON.stringify(notes))
        controlEdit = []
        list()
        closeEditModal()
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
})