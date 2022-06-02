import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Main from './Main'

const App = () => {
  return (
    <ChakraProvider>
        <Main/>
    </ChakraProvider>
  )
}

export default App