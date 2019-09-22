alert("Welcome to the space calculator")
alert("Choose the planet you wish to know your weight on")
var option = parseInt(prompt("1 = Mars | 2 = Jupiter | 3 = Saturn"))
var weight 
const earth_gravity = 9.8
const mars_gravity = 3.7
const jupiters_gravity = 24.7
const saturns_gravity = 10.44
if(option == 1){
    weight = parseFloat(prompt("Write your weight"))
    var mars_weight = (weight * mars_gravity)/earth_gravity
    alert("Your weight in Mars is: " + mars_weight + " kg")
}else if(option == 2){
    weight = parseFloat(prompt("Write your weight"))
    var jupiters_weight = (weight * jupiters_gravity)/earth_gravity
    alert("Your weight in Jupiter is: " + jupiters_weight + " kg")
}else if(option == 3){
    weight = parseFloat(prompt("Write your weight"))
    var saturns_weight = (weight * saturns_gravity)/earth_gravity
    alert("Your weight in Saturn is: " + saturns_weight + " kg")
}else{
    alert("Unavailable option")
}

