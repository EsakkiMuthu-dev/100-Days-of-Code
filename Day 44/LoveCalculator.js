
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  input:process.stdin,
  output: process.stdout
});
let name1,name2;
rl.question('Enter something: ', (n1) => {
    name1=n1;
  rl.close(); // Close the interface when you're done
});
rl.question('Enter something: ', (n2) => {
    name2=n2;
  rl.close(); // Close the interface when you're done
});

console.log(name1,name2)