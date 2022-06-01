import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import GithubRepositories from './GithubRepositories'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
    const theme = createTheme();
  return (
        <ThemeProvider theme={theme}>
    <ChakraProvider>
        <GithubRepositories/>
    </ChakraProvider>
        </ThemeProvider>
  )
}

export default App