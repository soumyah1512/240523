import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import GithubRepositories from './GithubRepositories'

const App = () => {
  return (
    <ChakraProvider>
        <GithubRepositories/>
    </ChakraProvider>
  )
}

export default App