class Person {
    type = 'human';

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('this.name :>> ', this.name + ' говорит привет!');
    }
}

const max = new Person('Max');
// max.greet();

// console.log('max :>> ', max);
// console.log('max.type :>> ', max.type);

// console.log(max.__proto__ === Person.prototype);

class Programmer extends Person {
    constructor(name, job) {
        super(name);

        this._job = job;
    }

    get job() {
        return this._job.toUpperCase();
    }

    set job(job) {
        if (job.length < 2) {
            console.log('Validation failed');
        } else {
            this._job = job;
        }
    }

    greet() {
        super.greet();
        console.log('rewritten');
    }
}

const frontend = new Programmer('Max', 'Frontend');
// console.log('frontend :>> ', frontend);
// frontend.greet();
// console.log('frontebd.job :>> ', frontend.job);
frontend.job = 'backend';
// console.log('frontebd.job :>> ', frontend.job);

//* Static

class Util {
    static average(...args) {
        return args.reduce((acc, i) => acc += i, 0) / args.length;
    }
}

const res = Util.average(1, 1, 2, 3, 5, 8, 13);
console.log('res :>> ', res);

// const util = new Util();
// console.log(util.average(1, 1, 2, 3, 5, 8, 13));