import React from 'react';
import {ChakraProvider, useMediaQuery} from '@chakra-ui/react';
import Desktop from './Assignment-1/1/Desktop';
import Mobile from './Assignment-1/1/Mobile';
import Small from './Assignment-1/1/Small';
import Medium from './Assignment-1/1/Medium';
import Large from './Assignment-1/1/Large';


function App() {
  const [isMobile] = useMediaQuery("(max-width: 430px)")
  const [isS] = useMediaQuery("(max-width: 320px)")


  return (
    <ChakraProvider>
      {isMobile ? <Mobile/> : <Desktop/>}
      {isS ? <Small/> : <Medium/>}
    </ChakraProvider>
  );
}

export default App;
