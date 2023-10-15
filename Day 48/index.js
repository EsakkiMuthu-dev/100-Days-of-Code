const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }
  setTimeout(arto.greet.bind(arto), 1000);
  arto.greet();
  arto.doAddition(1, 4)        // 5 is printed
  const referenceToGreet=arto.greet.bind(arto);
  referenceToGreet();
  const referenceToAddition = arto.doAddition
  referenceToAddition(10, 15)   // 25 is printed