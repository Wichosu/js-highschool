function hello () {
    alert("This is my first function")
}

//hello()

function goodbye(){
    alert(`This is my second function`)
}

//goodbye()

function sum(){
    var number1 = 20
    var number2 = 13
    var number3 = number1 + number2
    console.log(number3)
}

//sum()
var name = "Luis"
function hiThere(){
    var lastname = " Calderon Miranda"
    alert(`Hi ${name} ${lastname}`)
}

//hiThere()

function goodbyeThere (){
    var lastname = "Miranda"
    alert(`Hello ${name} ${lastname}`)
}

var number = 100

function modifyNumber(){
    number += 200
    alert(`Value of number is: ${number}`)
}


function modNumber(){
    number += 150
    alert(`Value of number is: ${number}`)
}

function hi(myName){
    alert(`Hi ${myName}`)
}

function operation(n1, n2){
    alert(`${n1+n2}`)
}

var city = "Xalapa"

function place (c){
    c = c.toUpperCase()
    console.log(c)
}

place(city)

function multiply(number1, number2){
    var number3 = number1 * number2
    return number3
}

var multiplication = multiply(5,3)