alert("Hola esto es una calculadora")

var numero1 = parseInt(prompt("Escribe un numero:"))
var numero2 = parseInt(prompt("Escribe otro numero:"))
alert("1 = suma | 2 = resta | 3 = multiplicacion | 4 = division")
var opcion = parseInt(prompt("Elige la opcion: "))
var operacion
var texto_operacion


if( opcion == 1){
    operacion = numero1 + numero2
    texto_operacion = "suma"
}

else if( opcion == 2){
    operacion = numero1 - numero2
    texto_operacion = "resta"
}

else if( opcion == 3){
    operacion = numero1 * numero2
    texto_operacion = "multiplicacion"
}

else if( opcion == 4){
    operacion = numero1 / numero2
    texto_operacion = "division"
}

if(opcion > 4 || opcion < 1){
    alert("Opcion invalida")
}else{
    alert("El resultado de la " +texto_operacion + " es: " + operacion)
}

