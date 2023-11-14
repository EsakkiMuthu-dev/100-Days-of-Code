import { useEffect, useState ,useCallback} from 'react'
import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,Container
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

function App() {
  const[password,setPassword]=useState('');
  const [length, setLength] = useState(8);
  const[copied,setCopied]=useState(false);
  const[numbersAllowed,setNumbersAllowed]=useState(false);
  const[charactersAllowed,setCharactersAllowed]=useState(false);


  const generatePassword= useCallback(()=>{
      let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let password = "";
    
      if (numbersAllowed) {
        charset += "0123456789";
      }
    
      if (charactersAllowed) {
        charset += "!@#$%^&*()_+[]{}|;:,.<>?";
      }
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
    
       setPassword(password);
    
    },[length,numbersAllowed,charactersAllowed])

  
 
  useEffect(()=>{
    // Debounce user input
    const timeoutId = setTimeout(() => {
      generatePassword();
    }, 500);

  },[length,numbersAllowed,charactersAllowed])


  const handleCopy= async ()=>{
    try{
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(()=>{
        setCopied(false)
      },2500)
    }catch(e){
      console.log(`unable to copy to clipboard ${e}`)
    }
  }

  return (
    <>
    <Container maxW='md' bg='blue.600' centerContent color='white'>
     <h1>Password Generator</h1>
     <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type='text'
        placeholder='Enter password'
        readOnly
        value={password}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' 
        colorScheme={copied?"green":"gray"}
        onClick={handleCopy} >
          {copied?"copied!":"copy"}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Slider aria-label='slider-ex-1' min={6} max={20} value={length}
    onChange={(val)=>setLength(val)}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider> <label htmlFor="">Length: {length}</label>

<Checkbox isChecked={numbersAllowed} onChange={()=>setNumbersAllowed((prev)=>!prev)}>Numbers</Checkbox>
<Checkbox isChecked={charactersAllowed}onChange={()=>setCharactersAllowed((prev)=>!prev)}>Characters</Checkbox>
</Container>
    </>
  )
}

export default App
