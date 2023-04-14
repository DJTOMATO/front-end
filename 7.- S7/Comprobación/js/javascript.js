// declaración de variables
var identificador1 = "valor" //string trexto
var identificador2 = 10 // int numero entero sin decimales
var identificador3 = 10.5 //float
var identificador4 = true //boolean
var identificador5 = 'c' //character

//let es variable local
let identificador1 = "valor" //string trexto
let identificador2 = 10 // int numero entero sin decimales
let identificador3 = 10.5 //float
let identificador4 = true //boolean
let identificador5 = 'c' //character


//log en programacion
console.log(identificador1)


var numero1 = prompt("ingrese el primer numero")
var numero2 = prompt("ingrese el segundo numero")

//conviert numeros 
numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
//alerta
if (numero1 > numero2) {
    alert("el numero " + numero1 + " es mayor")
} else if (numero1 == numero2) {
    alert("Los numeros son iguales")
} else if (numero2 > numero1) {
    alert("el numero " + numero2 + " es mayor")
}

alert(numero1 + numero2)

