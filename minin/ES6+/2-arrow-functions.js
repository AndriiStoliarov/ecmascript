// function sum(a, b) {
//     return a + b;
// }

// function cube(a) {
//     return a ** 3;
// }

// const sum = (a, b) => {
//     return a + b;
// };

// const sum = (a, b) => a + b;
// const cube = a => a ** 3;

// console.log('sum(41, 1) :>> ', sum(41, 1));
// console.log('cube(2) :>> ', cube(2));

// setTimeout(function() {
//     console.log('After 1 secont');
// }, 1000);

// setTimeout( () => {
//     console.log('After 1 secont');
// }, 1000);

// setTimeout(() => console.log('After 1 secont'), 1000);


//*Context
function log() {
    console.log('this :>> ', this);
}

const arrowLog = () => console.log('this :>> ', this);

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    // delayLog: function() {
    //     const self = this;
    //     global.setTimeout(function() {
    //         console.log(self.name + ' ' + self.age);
    //     }, 500);
    // }
    delayLog: function() {
        global.setTimeout(() => {
            console.log(this.name + ' ' + this.age);
        }, 500);
    }
};

// person.log();
// person.arrowLog();

// console.log('global :>> ', global);

person.delayLog();
