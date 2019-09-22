let luis = {
    name:"Luis Eduardo",
    lastname:"Calderón Miranda",
    age:17,
    bored:true
}

let kevin = {
    name:"Kevin",
    lastname:"Luna",
    age:17,
    bored:false
}

let rafa = {
    name:"Rafa",
    lastname:"Medina",
    age:17,
    bored:false
}

let eduardo = {
    name:"Eduardo",
    lastname:"Tijerina",
    age:18,
    bored:true
}

let naim = {
    name:"Naim",
    lastname:"Pinto",
    age:17,
    bored:true
}

greetFriends(naim)
greetFriends(kevin)
greetFriends(rafa)
greetFriends(eduardo)
greetFriends(luis)

function greetFriends(friend){
    alert(`Hi ${friend.name} ${friend.lastname}`)
    if(friend.bored == false){
        alert(`Great`)
    }else{
        alert(`We gotta play fortnite then`)
    }
}