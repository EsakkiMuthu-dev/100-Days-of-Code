// js for java programmer
// let vs const vs var
// datatypes number boolean
// null undefined
// conditionals 
// loo
//object array function

//datatype
//number -> int float long
//String -> char
//boolean
//null 
// undefined

//typed Lanaguage
// let  var const
let a=10;
let b =12;
 b ="saklds";
b='dsahjjs';
let nam="bharathi";
console.log(nam.length);

const PI =3.14;
// PI=278;
console.log("hello world!!")

let ab;
console.log(ab);
let age=18;
if(age>=18)
{
    console.log("you are an adult!");
}else if(age>5 && age<12){
    console.log("you are an child")
}else{
    console.log("you are an  teen");
}


// loops
// for(let i =0;i<10;i++)
// {
//     console.log(i);
// }

// let i=10;
// while(i<20)
// {
//     console.log(i);
//     i++
// }

// do{
//     console.log(i);
//     i++
// }while(i<30)

function isOdd(a){
    if(a%2==0)
    {
        return true;
    }
    return false;
}


console.log(isOdd(4));

function print(a){
    console.log(a+2);
}

let array=[1,true,"hii",4,5];
let object ={1:"Muthu","Muthu":2};
console.log(object["Muthu"])




// array.forEach(function (a){
//     console.log(a);
// });// anonymous function

// array.forEach((a)=>{
//     console.log(a);
// })


