interface Person {
    name: string;
    age: number;

    test(): string;
}

function greeter(person: Person){
    return "Hello, " + person;
}

var user = {name: 'Bob', age: 30, test: ()=>{ return 'user'}};

class Student implements Person{
    name: string;
    age: number;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    test(){
        return 'Hello World';
    }
}

console.log(user.test());

var student = new Student('Test', 30);
console.log(student.test());

document.body.innerHTML = greeter(user);