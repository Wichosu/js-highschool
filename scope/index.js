alert("Esto es una calculadora")
let result
while(true){
    let option = parseInt(prompt("1 = suma | 2 = resta | 3 = multiplicacion | 4 = division"))
    let number1 = parseFloat(prompt("Escribe el primer numero"))
    let number2 = parseFloat(prompt("Escribe el segundo numero"))
    
    if(option == 1){
        result = suma(number1,number2)
    }else if(option == 2){
        result = resta(number1,number2)
    }else if(option == 3){
        result = multiplicacion(number1,number2)
    }else if(option == 4){
        result = division(number1,number2)
    }
    
    alert(result)
    let cont = parseInt(prompt("Continue? 1=yes / 2=no"))

    if (cont == 2){
        break
    }
}

function suma(number1,number2){
    return number1 + number2
}
function resta(number1,number2){
    return number1 - number2

}
function multiplicacion(number1,number2){
    return number1 * number2

}
function division(number1,number2){
    return number1 / number2

}
