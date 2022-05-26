import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { RiEarthFill } from 'react-icons/ri'
import React from 'react'

const Listing = () => {
  return (
    <Box boxShadow='xs' bgColor={'white'} borderRadius='10px' p={'12px'} margin='15px 0px' _hover={{boxShadow:'xl'}}>
        <Flex gap={4} >
            <Flex width='6%'>
                <Image src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75" width="32px" height="32px"></Image>
            </Flex>
            <Grid width='70%'>
                <Text fontSize='sm'>Talewind</Text>
                <Text fontSize='lg' fontWeight='bold' noOfLines={1}>Lead Producer</Text>
                <Text fontSize='sm' fontWeight='500' color='#4A5469'>Talewind</Text>
            </Grid>
            <Grid width='20%' templateRows={'repeat(3,1fr)'}>
                <Flex direction='row-reverse' gap={6}>     
                    <Text rowSpan='1' color='#708097' >
                        <Icon as={RiEarthFill} fontSize='20px' marginRight={2}/>
                        <Icon as={BsFillBookmarkFill} fontSize='20px'/>
                    </Text>
                </Flex>
                <Box rowSpan='1'></Box>
                <Flex direction='row-reverse'>
                    <Text rowSpan='1' color='#708097' fontSize='14px'>
                       Full-Time
                    </Text>
                </Flex>

            </Grid>
        </Flex>
    </Box>
  )
}

export default Listing