window.addEventListener('load', function(){
    let note = document.getElementById('note')
    let addNote = document.getElementById('addNote')
    let clearNotes = document.getElementById('clearNotes')
    let content = document.getElementById('content')
    let notes = JSON.parse(localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : []
    list()

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
        let total = JSON.parse(localStorage.getItem("notes"))
        if(total != null){
            for(i = 0; i < total.length; i++){
                content.innerHTML += `
                <div class="post-it">
                    <h3>${total[i].replace('↵', '<br>')}</h3>
                </div>`
            }
        } 
    }

    clearNotes.addEventListener('click', () => {
        localStorage.clear(); 
        notes = []
        list()
    })

    // document.addEventListener('storage')
    
})

