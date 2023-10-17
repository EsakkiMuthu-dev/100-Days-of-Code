const Greet=({name,age})=>{
  function calculateAge(age)
  {
    let curYear= new Date().getFullYear();
    return curYear-age;
  }
  return(
    <>
    <h1>Hello {name}!! . Welcome to the Greetings Components</h1>
    <h1>I am a helper Component for actual App Component . Your born year probably be {calculateAge(age)} right!!</h1>
    
    </>
  )
}

function App() {

  return (
    <>
    <h1>Hello!!</h1>
    <Greet name="Muthu" age="22" />
    <Greet name="Bharathi" age="22" />
    </>
  )
}

export default App
