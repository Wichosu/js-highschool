var option = parseInt(prompt("Choose an option: 1 | 2 | 3 | 4"))

if(option == 1){
    alert("You chose the rectangle!")
    var base = parseInt(prompt("Write the base"))
    var height = parseInt(prompt("Write the height"))
    var area = base * height
    alert("The area of the rectangle is: " + area)
}else if(option == 2){
    alert("You chose the trapeze!")
    var height = parseInt(prompt("Write the height"))
    var major_base = parseInt(prompt("Write the major base"))
    var minor_base = parseInt(prompt("Write the minor_base"))
    var area = (height * (major_base + minor_base)) / 2
    alert("The area of the trapeze is: " + area)
}else if(option == 3){
    alert("You chose the circle!")
    var radio = parseInt(prompt("Write the radio"))
    var area = 3.1416 * (radio * radio)
    alert("The area of the circle is: " + area)
}else if(option == 4){
    alert("You chose the diamond")
    var major_diameter = parseInt(prompt("Write the major diameter"))
    var minor_diameter = parseFloat(prompt("Write the minor diameter"))
    var area = (major_diameter * minor_diameter) / 2
    alert("The area of the rombo is: " + area)
}