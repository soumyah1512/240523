import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Listing from './Listing'

const JobListings = () => {
  return (
    <>
    <Box bgColor={'#ECF2F6'} marginTop={50} p={50}>
        <Grid width='43%' margin='auto'>
            <Heading size='xl'>
                <Flex>
                    <Text color='purple.600'>Recent&nbsp;</Text> Jobs
                </Flex>
            </Heading>
        <Listing/>
        <Listing/>
        <Listing/>
        <Listing/>
        <Listing/>
        <Listing/>
        <Listing/>
        </Grid>
    </Box>
    </>
  )
}

export default JobListings