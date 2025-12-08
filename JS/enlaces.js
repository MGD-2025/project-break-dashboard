const nombrenlace = document.getElementById('nombrenlace')
const urlenlace= document.getElementById('urlenlace')
const btnañadirenlace = document.getElementById ('btnañadirenlace')
const listaenlaces = document.getElementById ('listaenlaces')
const mesajeerror=document.getElementById('mesajeerror')

let enlaces = JSON.parse(localStorage.getItem('enlaces')) || []

function guardarenlaces(){
    localStorage.setItem('enlaces', JSON.stringify(enlaces))
}

function todosenlaces (){
    listaenlaces.innerHTML = '';
    enlaces.forEach((enlace,i)=>{
        const lista =document.createElement('li')
        const a = document.createElement('a')
            a.textContent=enlace.nombre
            a.href=enlace.url
            a.target= '_blank'
         const btneliminar = document.createElement('button')
            btneliminar.textContent='Eliminar'

    btneliminar.addEventListener('click', ()=>{
        enlaces.splice(i,1)
    guardarenlaces()
    todosenlaces()

    })

    lista.appendChild(a)
    lista.appendChild(btneliminar)
    listaenlaces.appendChild(lista)
})
}

    btnañadirenlace.addEventListener ('click', ()=>{
        const nombre = nombrenlace.value.trim ()
        const url = urlenlace.value.trim ()

    if (!nombre || !url){
        mesajeerror.textContent = 'Hay un campo vacío'
    return
    }
    
    const nuevoenlace = {
        nombre: nombre, 
        url: url
    }

    enlaces.push (nuevoenlace)
    guardarenlaces()
    todosenlaces()

    nombrenlace.value=''
    urlenlace.value =''

    })

    todosenlaces()