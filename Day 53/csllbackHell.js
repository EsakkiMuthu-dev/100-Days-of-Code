// function callPizzaShop(callback)
// {
//     setTimeout(()=>{
//         console.log(`Waiter pick the call  place the order now!!`);
//         callback(eatPizza);
//     },3000)

// }
// function orderPizza(callback){
//     setTimeout(()=>{
//         console.log(` orderPlaced !`);
//         callback();
//     },3000)
// }
// function eatPizza()
// {
//     console.log("eat pizzaaaa")
// }
// callPizzaShop(orderPizza);

function callPizzaShop()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Waiter Picks the call . Place the ordern now!");
            
        },2000)
    });
}
function orderPizza()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Pizza ordered successfully!! 🍕")
        },3000)
    })
}
callPizzaShop()
    .then((data)=>{ console.log(data);  return orderPizza()})
    .then((data)=> console.log(data))

