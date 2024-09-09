/* map=> mapear o nosso array
-cria um  novo array ,apartir do array percorrido (array original)

-cria um novo array ,com as mesma quantidade do itens do array original

aceita 3 parametros
- item do array
- index
-array completo

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => item * 2)


const list = [
    { name: 'marcelo', vip: true },
    { name: 'fernanda', vip: false },
    { name: 'nicollas', vip: true },
    { name: 'camila', vip: true },
]
const newlist = list.map(user => {
    return
    const newuser = {
        name: user.name,
        braceletcolor: user.vip ? 'black' : 'blue'
    }


})
console.log(newlist)*/

const studants = [
    { name: 'marcelo', testgrade: 7 },
    { name: 'fernanda', testgrade: 6 },
    { name: 'nicollas', testgrade: 9 },
    { name: 'camila', testgrade: 3 },
]

const newstudants = studants.map(studants => {
    return {
        name: studants.name,
        statustudant: studants.testgrade >= 5 ? "aprovado" : "reprvado"
    }
})
console.log(newstudants)