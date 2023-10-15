/*
Task:

Create a prototype chain of objects representing different vehicles. The chain should include a base object called Vehicle with a property type set to 'Generic Vehicle' and a method start that returns 'Starting the vehicle'. Create two derived objects, Car and Bicycle, which inherit from the Vehicle prototype. The Car object should have a property model set to 'SUV' and override the start method to return 'Starting the SUV'. The Bicycle object should have no additional properties but should inherit the start method from the Vehicle prototype.

*/
//Creating Vechile Protoype
let Vehicle={
    type:"Generic Vehicle",
    start:()=>"Starting the vehicle"
}

//Car object linked to vechicle prototype
let Car= Object.create(Vehicle);
Car.type="Car";
Car.model="undefined";
Car.start= function() {
    return `Starting the ${this.model} 🚘🚙🚔`;
}

//Bicyle object linked to vechile prototype
let Bicycle = Object.create(Vehicle);
Bicycle.type="Bicycle";
Bicycle.start=()=>`Starting the Bicycle🚴`;
Bicycle.ringBell=()=>`Ring Bell🕭⏰🕭 `

//Creating instances from two objects bicycle and car
let MyCar=Object.create(Car);
MyCar.model="SUV";
console.log(MyCar.start());
let MyBicycle= Object.create(Bicycle);
console.log(MyBicycle.start());
console.log(MyBicycle.ringBell());


