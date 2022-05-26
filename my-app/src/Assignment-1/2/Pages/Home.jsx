import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import JobListings from '../Components/JobListings'
import Navbar from '../Components/Navbar'
import PurpleButtons from '../Components/PurpleButtons'
import SearchBar from '../Components/SearchBar'

const Home = () => {
  return (
    <>
    {/* style={{backgroundColor: '#ECF2F6'}} */}
        <div > 
        <Navbar/>
        <Box p='8' bgColor={'white'}>
            <Center marginTop='32px' >
                <Heading size='3xl' lineHeight={'78px'} color='#2C3749' textAlign='center'>
                    Find The Right
                    <Flex margin='auto'>
                        <Text
                        bgGradient='linear(to-l, #7F5BD4, #377ECF)'
                        bgClip='text'
                        >
                        Four-Day&nbsp; 
                        </Text>
                    Week Job
                    </Flex>
                </Heading>
            </Center>
        </Box>
        <SearchBar/>
        <PurpleButtons/>
        <JobListings/>
        </div>
    </>
  )
}

export default Home