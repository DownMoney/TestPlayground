// @flow


function multiply(x:number, y:number):number {
    return x * y;
}

console.log(multiply(2, 4));

function arrayTest(a:Array<number>):number {
    return a.reduce((acc, cur) => acc + cur, 0);
}

console.log(arrayTest([1, 2, 3, 4, 5, 1]));

function helloWorld():string {
    return 'Hello World';
}

console.log(helloWorld);

function dynamic(x) {
    if (typeof x === 'string') {
        return x.length;
    } else {
        return x;
    }
}

console.log(dynamic(43));
console.log(dynamic('Hello'));