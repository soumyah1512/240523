import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Home from './Assignment-1/2/Pages/Home';
import Login from './Login_trial/Login';
import AllRoutes from './Login_trial/AllRoutes';

function App() {
  return (
    <ChakraProvider>
      {/* <Home/> */}
      <AllRoutes/>
      {/* <Login/> */}
    </ChakraProvider>
  );
}

export default App;
