let arr=[1,2,3,"dbh"];
arr.push(2);
arr.id="checking";
console.log(arr["id"]);
for(i of arr)
{
    console.log(i);
}
console.log("<------------------------>")
arr1=arr.map((element)=> element*2);
arr1.forEach(element => {
    console.log(element);
});

const[first ,second , ...remaining] = arr1;
console.log(first,second,remaining);

const square =a=>a*a;
console.log(square(5));