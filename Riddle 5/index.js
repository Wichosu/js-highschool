let lugar = prompt("Escribe tu destino")
let dias = parseInt(prompt("Escribe los dias que pasaras"))
let comidas = 500 * dias
let transporte = 200 * dias
let hotel = 1500 * dias
let total = hotel + transporte + comidas
alert(`El presupuesto para ${lugar} por ${dias} días es de: ${hotel} de hotel, ${comidas} de comidas y ${transporte} de transporte. Haciendo un total de ${total}`)