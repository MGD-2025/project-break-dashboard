
const reloj = document.getElementById('reloj')
const frase = document.getElementById('frase')
let mensaje = ''

function actualizarHora (){
    const horactual = new Date ()
    let horas = horactual.getHours().toString().padStart(2,0)
    let minutos = horactual.getMinutes().toString().padStart(2,0)
    let segundos = horactual.getSeconds().toString().padStart(2,0)

if (horas>00 && horas<7){
    mensaje=('Es hora de dormir')
}
else if (horas>=7 && horas<12){
    mensaje=('A desayunar y coger energía')
}
else if (horas>=12 && horas<15){
    mensaje=('Vamos a trabajar duro')
}
else if (horas>=15 && horas<18){
    mensaje=('A comer y descansar')
}
else if (horas>=18 && horas<21){
    mensaje=('Venga, trabajamos un ratito más')
}
else if (horas>=21 && horas<00){
    mensaje=('Relájate un ratito')
}

reloj.innerHTML= `${horas}:${minutos}:${segundos}`
frase.innerHTML=mensaje
}

actualizarHora()
setInterval(actualizarHora,1000)


const fecha = document.getElementById ('fecha')
const mesesaño = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const diassemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']

function actualizaFecha (){
    const fechactual = new Date ()
    let dia =fechactual.getDate()
    let mes =mesesaño[fechactual.getMonth()]
    let año =fechactual.getFullYear()
    let diasemana = diassemana[fechactual.getDay ()]
    
    fecha.innerHTML = `Hoy es ${diasemana},  día ${dia} de ${mes} del ${año}`
}

actualizaFecha()

