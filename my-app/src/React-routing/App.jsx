import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import AllRoutes from './AllRoutes'

const App = () => {
  return (
    <ChakraProvider>
        <AllRoutes/>
    </ChakraProvider>
  )
}

export default App