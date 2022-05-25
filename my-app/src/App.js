import React from 'react';
import {ChakraProvider, useMediaQuery} from '@chakra-ui/react';
import Desktop from './Assignment-1/1/Desktop';
import Mobile from './Assignment-1/1/Mobile';


function App() {
  const [isMobile] = useMediaQuery("(max-width: 430px)")
  return (
    <ChakraProvider>
      {isMobile ? <Mobile/> : <Desktop/>}
    </ChakraProvider>
  );
}

export default App;
