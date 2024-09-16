const compannylist = [
    { name: 'sansung', marketvalue: 50, ceo: 'kin hyu suk', foundedon: 1938 },
    { name: 'microsoft', marketvalue: 415, ceo: 'satya nadella', foundedon: 1975 },
    { name: 'intel', marketvalue: 117, ceo: 'brian krzanich', foundedon: 1968, },
    { name: 'facebook', marketvalue: 383, ceo: 'mark zuckerberg', foundedon: 2004 },
    { name: 'spotify', marketvalue: 30, ceo: 'daniel ek', foundedon: 2006 },
    { name: 'apple', marketvalue: 845, ceo: 'tim cook', foundedon: 1976 },]

const sub10percent = compannylist => {
    compannylist.marketvalue = compannylist.marketvalue - compannylist.marketvalue / 10
    return compannylist
}
const foundedon = (compannylist) => compannylist.foundedon < 1999
const valuetotal = (acc, compannylist) => acc + compannylist.marketvalue



const company = compannylist.map(sub10percent)

    .filter(foundedon)
    .reduce(valuetotal, 0)

console.log(` the value  total was : $  ${company} `)
