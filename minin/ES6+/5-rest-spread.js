//* Rest
// function average(arr) {
//     return arr.reduce((acc, i) => acc += i, 0) / arr.length;
// }

// console.log('average([10, 20, 30, 40]) :>> ', average([10, 20, 30, 40]));

// function average(...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length;
// }

// console.log('average(10, 20, 30, 40, 50) :>> ', average(10, 20, 30, 40, 50));

function average(a, b, ...args) {
    console.log('args :>> ', args);
    return args.reduce((acc, i) => acc += i, 0) / args.length;
}

// console.log('average(10, 20, 30, 40, 50) :>> ', average(10, 20, 30, 40, 50));


//* Spread
// const array = [1, 2, 3, 5, 8, 13];

// console.log('array :>> ', array);
// console.log('...array :>> ', ...array);

// console.log('Math.max(...array) :>> ', Math.max(...array));
// console.log('Math.min(...array) :>> ', Math.min(...array));
// console.log('Math.max.apply(null, array) :>> ', Math.max.apply(null, array));

// const fib = [1, ...array];
// console.log('fib :>> ', fib);


//* Destructuring
const array = [1, undefined, 3, 5, 8, 13];

// const a = array[0];
// const b = array[1];
// const [a, b = 42, ...c] = array;
// console.log('a, b :>> ', a, b, c);

// const [a,, c] = array;
// console.log('a, c :>> ', a, c);

//* Object
const address = {
    country: 'Ukraine',
    city: 'Cherkasy',
    // street: 'Gagarina',
    concat: function() {
        return `${this.country}, ${this.city}, ${this.street}`;
    }
};

// const {city, country, street = 'GD', concat: addressConcat} = address;

// console.log('city :>> ', city);
// console.log('concat :>> ', addressConcat.call(address));
// console.log('street :>> ', street);
// console.log('address.concat() :>> ', address.concat());

// const {city, ...rest} = address;
// console.log('city :>> ', city);
// console.log('rest :>> ', rest);

const newAddress = {...address, street: 'GD', code: 18000};

console.log('newAddress :>> ', newAddress);