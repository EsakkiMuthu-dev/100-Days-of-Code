import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import LengthResults from './components/LengthResults';
function App() {
  const[url,setUrl]=useState('');
  const[display,setDisplay]=useState(false);
  const getLength=()=>{
    console.log(url);
    setDisplay(true);
  }


  return (
    <>
     <div className='header'>
      <h1 >Yotube Playlist Length</h1>
      </div>
      <div className='input'>
      <TextField id="standard-basic" label="url"placeholder='https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ' value={url}
      onChange={(event)=>setUrl(event.target.value)}
       variant="standard" />
      <Button variant="contained" onClick={getLength}> Get Length </Button>;
      </div>
      {display && <LengthResults url={url}/>}
    </>
  )
}

export default App
