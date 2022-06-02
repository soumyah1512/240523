import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'

const Sqaure = ({text, onClick}) => {
  return (
    <>
        <Box height='100pX' width='100pX' border='5px solid grey' onClick={(e) => onClick(e)}>
          <Center>
            <Heading as='h1' size='4xl'>
              {text}
            </Heading>
          </Center>
        </Box>
    </> 
  )
}

export default Sqaure