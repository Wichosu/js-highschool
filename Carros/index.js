
let Car1 = {
    Model: "Modelo-Q",
    Brand: "Ford",
    Color: "Azul",
    Cylinders: 4,
    Max_vel: 200,
    Price:   200.000,
    Electric: false
}
let Car2 = {
    Model: "XXX",
    Brand: "Ford",
    Color: "Negro",
    Cylinders: 8,
    Max_vel: 220,
    Price:   240.000,
    Electric: false
}
let Car3 = {
    Model: "Camaro",
    Brand: "Chevrolet",
    Color: "Amarillo",
    Cylinders: 8,
    Max_vel: 360,
    Price:   180.000,
    Electric: true
}
let Car4 = {
    Model: "Versa",
    Brand: "Nissan",
    Color: "Azul",
    Cylinders: 8,
    Max_vel: 230,
    Price:   200.000,
    Electric: true
}
let Car5 = {
    Model: "Modelo 38-T",
    Brand: "Volkswagen",
    Color: "Cafe con leche cosmico",
    Cylinders: 4,
    Max_vel: 300,
    Price:   800.000,
    Electric: false
}
let Car6 = {
    Model: "Versa",
    Brand: "Nissan",
    Color: "Gris",
    Cylinders: 4,
    Max_vel: 300,
    Price:   500.000,
    Electric: true
}
let Car7 = {
    Model: "Tsuru II",
    Brand: "Nissan",
    Color: "Dorado",
    Cylinders: 8,
    Max_vel: 340,
    Price:   390.000,
    Electric: false
}
let Car8 = {
    Model: "Huracan",
    Brand: "Lamborghini",
    Color: "Rojo",
    Cylinders: 8,
    Max_vel: 400,
    Price:   1300.000,
    Electric: true
}
let Car9 = {
    Model: "Modelo 79-O",
    Brand: "Audi",
    Color: "Negro",
    Cylinders: 4,
    Max_vel: 400,
    Price:   200.000,
    Electric: false
}
let Car10 = {
    Model: "Bote Movil Invisible",
    Brand: "BBC",
    Color: "Invisible",
    Cylinders: 8,
    Max_vel: 1200,
    Price:  600.000,
    Electric: true
}

KnowCar(Car1)
KnowCar(Car2)
KnowCar(Car3)
KnowCar(Car4)
KnowCar(Car5)
KnowCar(Car6)
KnowCar(Car7)
KnowCar(Car8)
KnowCar(Car9)
KnowCar(Car10)

function KnowCar (auto){
    if(auto.Electric == true){
        alert(`El ${auto.Model} de la ${auto.Brand} del color ${auto.Color} es electrico`)    
    }else{
        alert( `El ${auto.Model} de la ${auto.Brand} del color ${auto.Color} no es electrico`)
    } 
}



