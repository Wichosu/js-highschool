let nombre = prompt("¿Cual es tu nombre?")
let año_Nacimiento = parseInt(prompt("¿En que año naciste?"))
let persona = {
    Nombre:nombre,
    edad:2018 - año_Nacimiento
}

alert(`${persona.Nombre} tiene ${persona.edad} años`)
