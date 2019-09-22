let car = {
    model: "Model S",
    wheels: 100
}

alert(`La vida util de la llanta es ${car.wheels}`)

const BACHE = .15
const TOPE = .01
const KM_RECORRIDOS = 50000

for(let i=1;i<KM_RECORRIDOS;i++){
    let random = Math.random()
    if(random < .1){
        tope(car)
    }else if(random < .45){
        bache(car)
    }
}

function bache(car){
    car.wheels -= BACHE
}
function tope(car){
    car.wheels -= TOPE
}

alert(`La vida util de la llanta despues de la simulación es ${car.wheels}`)