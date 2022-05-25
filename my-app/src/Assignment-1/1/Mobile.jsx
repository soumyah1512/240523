import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Mobile = () => {
  return (
    <>
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
    </>
  )
}

export default Mobile