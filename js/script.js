let key = 'item 1';

let nota1 = {title: 'Nota1', description: 'blablbal'}
let nota2 = {title: 'Nota2', description: 'dsmkds'}


localStorage.setItem(1, JSON.stringify(nota1));
localStorage.setItem(2, JSON.stringify(nota2));


for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    console.log(value['title'], value['description'])
}

