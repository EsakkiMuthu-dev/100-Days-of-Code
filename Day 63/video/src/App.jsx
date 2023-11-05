import { useState } from 'react'
import ReactPlayer from 'react-player'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [youtubeLink,setYoutubeLink]=useState('');
  const[isVideo,setIsVideo] = useState(false);

  return (
    <>
    <h1>Enter Link: </h1>
    <input type="text" value={youtubeLink} onChange={(e)=>setYoutubeLink(e.target.value)} />  
      {!isVideo && <ReactPlayer  url={youtubeLink}/>} 
    </>
  )
}

export default App
