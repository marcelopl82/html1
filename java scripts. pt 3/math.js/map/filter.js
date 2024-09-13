const listcarleilão = [
    { name: 'Pegeot', age: 1999, fipevalue: 12.000 },
    { name: 'vw gol', age: 2007, fipevalue: 13.000 },
    { name: 'mercedes', age: 2004, fipevalue: 12.500 },
    { name: 'fiat uno vivace', age: 2011, fipevalue: 24.300 },
    { name: 'ford  fiesta', age: 2009, fipevalue: 18.200 },
    { name: 'Pegeot', age: 1999, fipevalue: 12.000 },

]
const newlist=listcarleilão.filter(listcarleilão=>{
    if (listcarleilão.fipevalue< 18.000)return  true 
     else false
})



console.log(newlist)