import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Small = () => {
  return (
    <>
        <Box>
            <Center h='100' color='black'>
                <Text fontSize='5xl'>Layout 3</Text>
            </Center>
        </Box>
        <Grid templateRows='repeat(7,1fr)' h='600' gap={4} margin='0px 50px'>
            <GridItem w='100%' bg='yellow.400' />
            <GridItem w='100%' bg='yellow.400' />
            <GridItem w='100%' rowSpan='3' bg='pink.500' />
            <GridItem w='100%' bg='purple.500' />
            <GridItem w='100%' bg='purple.500' />
        </Grid>
    </>
  )
}

export default Small