import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Mobile = () => {
  return (
    <>
        <Box>
            <Center h='100' color='black'>
                <Text fontSize='5xl'>Layout 1</Text>
            </Center>
        </Box>
        <Grid templateRows='repeat(4,1fr)'>
            <GridItem w='100%'  bg='blue.500' p={6}>
                <Center h='100%' color='white'>
                    <Text fontSize='5xl'>NAV</Text>
                </Center>
            </GridItem>
            <GridItem w='100%' bg='red' >
                <Center h='100%' color='white'>
                    <Text fontSize='5xl'>WIDGET</Text>
                </Center>
            </GridItem>
            <GridItem rowSpan={2} w='100%' bg='orange' >
                <Center h='100%' color='white'>
                    <Text fontSize='5xl'>CONTENT</Text>
                </Center>
            </GridItem>
        </Grid>
        <Box>
            <Center h='100' color='black'>
                <Text fontSize='5xl'>Layout 2</Text>
            </Center>
        </Box>
        <Grid templateRows='repeat(3,1fr)' h='600' gap={4} margin='0px 50px'>
            <GridItem w='100%' bg='purple.500' />
            <GridItem w='100%' bg='red.500' />
            <GridItem w='100%' bg='blue.400' />
        </Grid>
    </>
  )
}

export default Mobile