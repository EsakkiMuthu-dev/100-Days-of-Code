const Hello =({name,age})=>{
  console.log(name,age);
  return(
    <>
      <h1>Hello {name}!!! ur age is {age}</h1>
    </>
  )
  }
const App=()=> {
  const now = Date.now();
  const a=10;
  const b =29;
  const name="Bharathi";
  const age =22;
  let arr=["hello","hi"];
  let obj={object:true};
  return (
   <div>
    <h1>Hello World!! . its {now}</h1>
    <p>{a}+{b}={a+b}</p>
    <Hello name="Esakki" age="22"/>
    <Hello name="Muthu"age="22" />
    <Hello name="Maha" age="16"/>
    <Hello name={name} age={age} />
    <p>{arr}</p>
   </div>
  )
}

export default App
