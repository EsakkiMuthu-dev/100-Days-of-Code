import { ChakraProvider, Box,Badge, Flex, Input, Select, IconButton,InputGroup,InputRightElement,InputLeftElement } from '@chakra-ui/react';
import { FaExchangeAlt } from 'react-icons/fa';
import { useState } from 'react';
import { CheckIcon} from '@chakra-ui/icons'
function CurrencyConverter() {
  // States to hold input values and selected currencies
  const [inputValueTop, setInputValueTop] = useState('');
  const [inputValueBottom, setInputValueBottom] = useState('');
  const [selectedCurrencyTop, setSelectedCurrencyTop] =useState('INR');
  const [selectedCurrencyBottom, setSelectedCurrencyBottom] =useState('USD');

  // Function to handle the conversion and update values
  const handleInputChangeTop = (value) => {
    setInputValueTop(value);
    // Implement your currency conversion logic here
    // Update the converted amount using setInputValueBottom(result);
    const result = 100; // Replace with your actual conversion result
    setInputValueBottom(result);
  };

  const handleInputChangeBottom = (value) => {
    setInputValueBottom(value);
    // Implement reverse conversion logic if needed
  };

  // Function to swap currencies
  const handleSwap = () => {
    // Swap the selected currencies
    setSelectedCurrencyTop(selectedCurrencyBottom);
    setSelectedCurrencyBottom(selectedCurrencyTop);
    // Swap the input values if they are not empty
    if (inputValueTop !== '' && inputValueBottom !== '') {
      setInputValueTop(inputValueBottom);
      setInputValueBottom(inputValueTop);
    }
  };

  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        boxShadow="lg"
        borderRadius="md"
        p={8}
      >
        <Box
          maxW="md"
          bg="whiteAlpha.900"
          p={8}
          borderRadius="md"
          boxShadow="xl"
          textAlign="center"
        >
          <h1>Currency Converter</h1>
          <Flex justifyContent="space-between" mt={4}>
            <Select
              value={selectedCurrencyTop}
              onChange={(e) => setSelectedCurrencyTop(e.target.value)}
            >
              <option value="INR">INR</option>
              {/* Add more currency options as needed */}
            </Select>
            <IconButton
              icon={<FaExchangeAlt />}
              aria-label="Swap"
              onClick={handleSwap}
            />
            <Select
              value={selectedCurrencyBottom}
              onChange={(e) => setSelectedCurrencyBottom(e.target.value)}
            >
              <option value="USD">USD</option>
              {/* Add more currency options as needed */}
            </Select>
          </Flex>
        <InputGroup mt='5'>
        <InputLeftElement
            pointerEvents='none'
            color='gray.400'
            fontSize='1.2em'
           
            > <Badge colorScheme='green' >{selectedCurrencyTop}</Badge></InputLeftElement>
          <Input
            placeholder={`Enter amount in ${selectedCurrencyTop}`}
          
            value={inputValueTop}
            id='top'
            onChange={(e) => handleInputChangeTop(e.target.value)}
          />
          </InputGroup>
        <InputGroup mt='5'>
            <InputLeftElement
            pointerEvents='none'
            color='gray.400'
            fontSize='1.2em'
           
            > <Badge colorScheme='green' >{selectedCurrencyBottom}</Badge></InputLeftElement>
            <Input placeholder={`Converted amount in ${selectedCurrencyBottom}`}
            value={inputValueBottom}
            onChange={(e)=>handleInputChangeBottom(e.target.value)} 
            readOnly/>
            <InputRightElement>
            
            <CheckIcon color='green.500' />
            </InputRightElement>
        </InputGroup>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default CurrencyConverter;
