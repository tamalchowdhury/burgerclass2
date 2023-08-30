// 1. take user input
let input = prompt("Enter mile")

// 2. do something with the input

addFive(10)

const addFive = function (num) {
    let result = num + 5
    return result
}


function bkashFeeCalculator(amount) {
    let result = (amount * 2)/100 
    return result
}

celciusToFerenheight(30)

function celciusToFerenheight(celcius) {
    // (30°C × 9/5) + 32
    let ferenheight = (celcius * 9/5) + 32
    return ferenheight
}

function dollarToTaka(dollar) {
    let taka = dollar * 109.33
    return taka
}

function mileToKilometer(mile) {
    let kilometer = mile * 1.609
    return kilometer
}



// 3. send and show the output
let output = mileToKilometer(input)
alert(output)