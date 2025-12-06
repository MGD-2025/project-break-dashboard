const numeroCaracteres = document.getElementById('numeroCaracteres')
const btnContraseña = document.getElementById('btnContraseña')
const mostrarContraseñas = document.getElementById('mostrarContraseñas')

const mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnñopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "!@#$%^&*()-_=+"
const caracteres = mayusculas + minusculas + numeros + simbolos

function generarContraseña() {
  let contraseña = ''
  const longitud = Number(numeroCaracteres.value) || 12
  if (longitud < 12 || longitud > 50) {
    mostrarContraseñas.textContent = 'Debe ser entre 12 y 50 caracteres'
    return
  }

  contraseña += mayusculas[Math.floor(Math.random() * mayusculas.length)]
  contraseña += minusculas[Math.floor(Math.random() * minusculas.length)]
  contraseña += numeros[Math.floor(Math.random() * numeros.length)]
  contraseña += simbolos[Math.floor(Math.random() * simbolos.length)]

  for (let i = 4; i < longitud; i++) {
    const indiceRandom = Math.floor(Math.random() * caracteres.length)
    contraseña += caracteres[indiceRandom]
  }

  mostrarContraseñas.textContent = contraseña
}

btnContraseña.addEventListener('click', generarContraseña)

