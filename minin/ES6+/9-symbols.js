const symbol = Symbol('demo');
const other = Symbol('demo');

// console.log('symbol :>> ', symbol);
// console.log('other :>> ', other);

// console.log(symbol === other);

const obj = {
    name: 'Elena',
    demo: 'DEMO',
    [symbol]: 'meta'
};

// console.log(obj[symbol]);

for (let key in obj) {
    console.log('key :>> ', key);
}

console.log('obj.demo :>> ', obj.demo);
console.log('obj[symbol] :>> ', obj[symbol]);