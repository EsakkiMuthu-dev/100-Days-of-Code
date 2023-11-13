import { useState } from 'react'
import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
function App() {
  const[password,setPassword]=useState('');
  const [length, setLength] = useState(8);
  const[numbersAllowed,setNumbersAllowed]=useState(false);
  const[charactersAllowed,setCharactersAllowed]=useState(false);

  return (
    <>
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
        <Button h='1.75rem' size='sm' >
          copy
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
    </>
  )
}

export default App
