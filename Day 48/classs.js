class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    greet() {
        console.log(`Hello ${this.name}. Ur age is ${this.age}`);
    }
}

const p1= new Person("Muthu",22);
const p2= new Person("Bharathi",22);
p1.greet();
p2.greet();