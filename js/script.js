window.addEventListener('load', function(){
    let note = document.getElementById('note')
    let addNote = document.getElementById('addNote')
    let clearNotes = document.getElementById('clearNotes')
    let content = document.getElementById('content')

    addNote.addEventListener('click', function () {
        let formattedKey = note.value.split('\n')[0].replaceAll(' ','_')
        let key = formattedKey
        let value = note.value

        localStorage.setItem(key, value)
        console.log(localStorage.getItem(key))
        list()
    })

    clearNotes.addEventListener('click', () => {
        localStorage.clear(); 
        list()
    })

    function list(){
        content.innerHTML = ''
        for(i = 0; i < localStorage.length; i++){
            content.innerHTML += `<h1>${localStorage.getItem(localStorage.key(i))}</h1>`.replaceAll('\n', '<br>')
        }
    }

    
    list()
})

