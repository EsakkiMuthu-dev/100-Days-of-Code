let obj={
    name:"Esakki",
    city:"Tirunelveli "
}
Function.__proto__.myBind= function (object){
    let obj=this;
    
    return function(){
        obj.call(object);
    }
}
let printName= function(){
    console.log(` I am  ${this.name} from ${this.city}`);
}

let fn =printName.myBind(obj);
fn();

// let printMyName=printName.bind(obj);



