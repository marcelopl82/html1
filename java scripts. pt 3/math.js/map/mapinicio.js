/* map=> mapear o nosso array
-cria um  novo array ,apartir do array percorrido (array original)

-cria um novo array ,com as mesma quantidade do itens do array original

aceita 3 parametros
- item do array
- index
-array completo*/

const number = [1, 2, 3, 4, 5, 6, 7]
const double = number.Map(Item => {
    const newItem = Item * 2
    return newItem
})
console.log(number)
console.log(double)

