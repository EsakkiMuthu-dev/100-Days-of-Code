

function App({notes}) {
  
  
  return (
    <>
      <h1 style={{textAlign:'center'}}>Notes App</h1>

      <ul>
          { notes.map((note)=> <li key={note.id}>{note.content}</li>)}
      </ul>
  
    </>
  )
}

export default App
