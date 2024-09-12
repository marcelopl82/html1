// acumulador começa com (0) roda 1° o acumulador guarda o numero 1//
// o valoratual é o (2  ) agora soma= 1+2= 3 (resultado o acumulador guarda e soma com prox.
//atual que é(3) assim vai somando tudos número//


/*const list =[1,2,3,4,5,6,7] 
const sum=list.reduce((acumulador, valoratual) =>{
	return acumulador+valoratual
},0)
console.log(sum)*/

const carlist = [
	{ produtcname: 'abacate', valuekg: 10, kg: 1 },
	{ produtcname: 'abacate', valuekg: 10, kg: 1.5 },
	{ produtcname: 'ameixa', valuekg: 6.99, kg: 2 },
	{ produtcname: 'banana', valuekg: 10, kg: 1.5 },
	{ produtcname: 'maça', valuekg: 7.99, kg: 11.8 },
	{ produtcname: 'abacaxi', valuekg: 11, kg: 1.7 },
	{ produtcname: 'uva', valuekg: 17, kg: 2 }]

const total = carlist.reduce((acc, value) => {
	const result = value.valuekg * value.kg
	return acc + total
}, 0)
console.log(`a sua compra deu um total de: ${total}`)