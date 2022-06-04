import { Box, Button, Center, ChakraProvider, Heading, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementCountAction, resetCount } from './action';

const App = () => {
    const count = useSelector((state) => {
        return state.counter.count;
      });
      const dispatch = useDispatch();
  return (
    <ChakraProvider>
        <Center marginTop='50px'>
            <VStack gap={4}>
                <Box border='2px solid green' p={8} borderRadius='8px'>
                    <Heading>Count: {count}</Heading>
                </Box>
                <HStack gap={4}>
                    <Button onClick={() => dispatch(incrementCountAction(1))}>ADD</Button>
                    <Button onClick={() => dispatch(incrementCountAction(-1))}>REDUCE</Button>
                </HStack>
                <Button backgroundColor="red.400" color='blue.800' onClick={() => dispatch(resetCount())}>Reset</Button>
            </VStack>
        </Center>
    </ChakraProvider>
  )
}

export default App