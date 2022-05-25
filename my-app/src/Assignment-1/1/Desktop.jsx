import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Desktop = () => {
  return (
    <>
        <Box>
            <Center h='100' color='black'>
                <Text fontSize='5xl'>Layout 1</Text>
            </Center>
        </Box>
        <Grid templateColumns='repeat(5,1fr)' h='500'>
            <GridItem w='100%'  bg='blue.500'>
                <Center h='100%' color='white'>
                    <Text fontSize='5xl'>NAV</Text>
                </Center>
            </GridItem>
            <GridItem w='100%' colSpan={3} bg='orange' >
                <Center h='100%' color='white'>
                    <Text fontSize='5xl'>CONTENT</Text>
                </Center>
            </GridItem>
            <GridItem w='100%' bg='red' >
                <Center h='100%' color='white'>
                    <Text fontSize='5xl'>WIDGET</Text>
                </Center>
            </GridItem>
        </Grid>
        <Box>
            <Center h='100' color='black'>
                <Text fontSize='5xl'>Layout 2</Text>
            </Center>
        </Box>
        <Grid templateColumns='repeat(3,1fr)' templateRows='repeat(3,1fr)' h='700' gap={4} margin='0px 150px'>
            <GridItem w='100%' colSpan={2} rowSpan={2} bg='purple.500' />
            <GridItem w='100%' rowSpan={3} bg='red.500' />
            <GridItem w='100%' colSpan={2} bg='blue.400' />
        </Grid>
    </>
  )
}

export default Desktop