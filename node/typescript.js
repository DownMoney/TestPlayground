function greeter(person) {
    return "Hello, " + person;
}
var user = { name: 'Bob', age: 30, test: function () { return 'user'; } };
var Student = (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.test = function () {
        return 'Hello World';
    };
    return Student;
}());
console.log(user.test());
var student = new Student('Test', 30);
console.log(student.test());
document.body.innerHTML = greeter(user);
//# sourceMappingURL=typescript.js.map