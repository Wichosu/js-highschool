let person = {
    name: "Luís",
    weight: 50
}

const DAYS_OF_THE_YEAR = 365

const WEIGHT_DIFFERENCE = .2

alert(`at the begining of the year ${person.name} weights ${person.weight}kg`)

for(let i = 1; i < DAYS_OF_THE_YEAR; i++){
    let random_number = Math.random()
    //.14 <.23 -> Hacer ejercicio
    //.47 < .5 -> Engordar
    //.84

    if(random_number < .2){
        doExercise(person)
    }else if(random_number < .6){
        overEat(person)
    }
}

function doExercise(person){
    person.weight -= WEIGHT_DIFFERENCE
}

function overEat(person){
    person.weight += WEIGHT_DIFFERENCE
}

alert(`at the end of the year ${person.name} weights ${person.weight}kg `)