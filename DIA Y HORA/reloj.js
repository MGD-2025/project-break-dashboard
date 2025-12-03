
const reloj = document.getElementById('reloj')
function actualizarHora (){
    const horactual = new Date ()
    let horas = horactual.getHours().toString().padStart(2,0)
    let minutos = horactual.getMinutes().toString().padStart(2,0)
    let segundos = horactual.getSeconds().toString().padStart(2,0)

reloj.innerHTML= `${horas}:${minutos}:${segundos}`
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

