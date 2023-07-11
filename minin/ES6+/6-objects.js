const cityField = 'city';

const job = 'Frontend';

const person = {
    age: 26,
    name: 'Irina',
    // job: job,
    job,
    [cityField + Date.now()]: 'Cherkasy',
    'country-live': 'Ukraine',
    print: () => 'Person',
    // toString: function() {
    //     return Object
    //         .keys(this)
    //         .filter(key => key !== 'toString')
    //         .map(key => this[key])
    //         .join(' ')
    // }
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
};

// console.log('person :>> ', person);
// console.log('person.toString() :>> ', person.toString());
// console.log('person.print() :>> ', person.print());
// console.log('person :>> ', person);

// Methods
const first = {a: 1};
const second = {b: 2};

// console.log('Object.is(10, 20) :>> ', Object.is(10, 20));
// console.log('Object.is(20, 20) :>> ', Object.is(20, 20));
// console.log('Object.assign(first, second) :>> ', Object.assign(first, second));
// console.log('first :>> ', first);

// console.log('Object.assign({}, first, second) :>> ', Object.assign({}, first, second));

// console.log('Object.assign(first, second) :>> ', Object.assign({}, first, {
//     c: 2,
//     d: 3
// }));

const obj = Object.assign({}, first, {
    c: 2,
    d: 3
});
// console.log('obj :>> ', obj);

console.log('Object.entries(obj) :>> ', Object.entries(obj));
console.log('Object.keys(obj) :>> ', Object.keys(obj));
console.log('Object.values(obj) :>> ', Object.values(obj));
