document.getElementById('button').addEventListener("click", function () {
    let key = document.getElementById('key').value
    let value = document.getElementById('value').value
    localStorage.setItem(key, value)
    atualiza()
})

window.addEventListener('storage', function(event){
    let key = event.key
    let newValue = event.newValue
    let oldValue = event.oldValue
    let storageArea = event.storageArea
    key.innerHTML(key+"\n"+newValue+"\n"+oldValue+"\n"+storageArea)
    atualiza()
})

let colors = ['#aed143', '#fbd249', '#fbd249', '#d35595', '#d35595']

function atualiza(){

    document.getElementById('content').innerHTML = ''
    for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    conteudo = `<div class='post-it'><h1>${key}</h1><p>${value}</p></div>`
    document.getElementById('content').innerHTML += conteudo
    let num = Math.ceil(Math.random()* colors.length - 1)
    document.getElementsByClassName('post-it')[i].style.backgroundColor = colors[num]
    }
    
}


document.getElementById('delete').addEventListener('click', function (){
    localStorage.clear()  
    atualiza()
})

atualiza()