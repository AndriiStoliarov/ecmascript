const defaultB = 30;
const getDefault = c => c * 2;

// function compute(a = 10, b = getDefault(10)) {
//     return a + b;
// }

function compute(a = 10, b = getDefault(a)) {
    return a + b;
}

// console.log('compute() :>> ', compute());
// console.log('compute(10, 20) :>> ', compute(10, 20));
// console.log('compute(10) :>> ', compute(10));
// console.log('compute(10, 30) :>> ', compute(10, 30));
console.log('compute() :>> ', compute());