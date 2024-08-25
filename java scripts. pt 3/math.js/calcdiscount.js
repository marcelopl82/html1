const cart = [10, 244, 99, 2, 20, 33, 250]
let finalvaluewishdiscont = 0

function calculatdiscount(price, descount) {
  const result = (price * descount) / 100
  return result
}

cart.forEach(value => {


  if (value > 30) {
    const discount = calculatdiscount(value, 10)
    finalvaluewishdiscont = finalvaluewishdiscont + (value - discount)
  }
  else { finalvaluewishdiscont += value }
});

   function sum (number1,number2,number3,number4,number5,number6,number7)
 
{console.log(`result : ${number1+number2+number3+number4+number5+number6+number7}`)}
   sum (10, 244, 99, 2, 20, 33, 250,)


console.log(`o valor final da compra foi de R$:${result},
    porem você teve desconto, ira pagar:  ${ finalvaluewishdiscont}`)
