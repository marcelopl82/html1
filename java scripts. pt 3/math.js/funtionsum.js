
const number = 0

/*function sum(number1,number2){console.log(number1+number2)}
sum(20,30)


function sub(number1,number2,number3){console.log(number1-number2+number3)}
sub(100,20,30)

function div(number1,number3,number2){console.log(`result:${number1/number3/number2}`)}
 div(150,50,2)
    
 function sum(){


    return " oláboanoite"}

console.log( sum())*/

function calculatdiscount(price, descount) {
    const result = (price * descount) / 100
    return result
}



const cart = [10, 65, 150, 90, 40]
let valuefinal = 0

cart.forEach(value => {
    

    if (value > 65) { const discount = calculatdiscount(value, 10) 
    valuefinal = valuefinal + (value - discount)}


  else {  valuefinal+=value}

});
console.log(valuefinal)