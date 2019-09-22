let producto = prompt("Escribe el nombre del producto")
let precio = parseFloat(prompt("Escribe el precio sin descuento"))
let descuento = parseInt(prompt("Escribe el porcentaje de descuento"))
let precio_descontado = (precio * descuento) / 100
let precio_final = precio - precio_descontado
alert(`El precio del ${producto} con el descuento es de ${precio_final}`)