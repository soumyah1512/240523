import React from 'react'
import {ChakraProvider} from '@chakra-ui/react';
import Contacts from './Contacts';


const App = () => {
  return (
      <ChakraProvider>
          <Contacts/>
      </ChakraProvider>
  )
}

export default App