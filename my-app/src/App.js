import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Home from './Assignment-1/2/Pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
