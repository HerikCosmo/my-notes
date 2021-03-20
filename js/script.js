window.addEventListener('load', function(){
    let note = document.getElementById('note')
    let addNote = document.getElementById('addNote')
    let clearNotes = document.getElementById('clearNotes')
    let content = document.getElementById('content')
    let notes = JSON.parse(localStorage.getItem("notes")) ?? []
    let openModal = document.getElementById("open-modal")
    let closeModal = document.getElementById("close-modal")
    let modal = document.getElementsByClassName('modal')[0]
    let keyNote = document.getElementsByClassName('idNote')
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
        console.log(notes)
        let value = JSON.stringify(notes)
        localStorage.setItem(key, value)
        note.value = ''
        list()
    })

    function list(){
        content.innerHTML = ''
        let total = JSON.parse(localStorage.getItem("notes"))
        if(total != null){
            for(i = 0; i < total.length; i++){
                content.innerHTML += `
                <div class="post-it">
                    <h3>${total[i]}</h3>
                    <input type='hidden' class='idNote' value='${i}'>
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

    deleteNote = function(value){
        notes.splice(value, 1)
        localStorage.setItem("notes", JSON.stringify(notes))
        list()
    }

    

    // document.addEventListener('storage')
    
})

