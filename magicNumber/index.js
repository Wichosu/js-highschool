let numero_magico = Math.floor((Math.random()*100))
alert("Bienvenido al numero magico, intenta adivinar el numero magico")
while(true){
    let numero = parseInt(prompt("Escribe un numero"))
    if(numero < numero_magico){
        alert("Tu numero es mas chico")
    }else if(numero > numero_magico){
        alert("Tu numero es mas alto")
    }else if(numero == numero_magico){
        alert("Ganaste")
        break
    }
}
