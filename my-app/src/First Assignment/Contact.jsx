import React, { useState } from 'react'
import { Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react'


const Contact = ({item}) => {
    const [show,setShow] = useState(false)
    console.log(item,"item")
  return (
    <>
        <Box w='400px' p={4}  margin='auto' borderBottom='1px solid #DCDDDC' 
        onClick={() => {
            if(show)
            {
                setShow(false)
            }else setShow(true)
            } }> 
            <Flex gap={4}>
                <Avatar name='Dan Abrahmov' src={item.avatar} />
                <Grid>
                    <Text fontSize='lg'fontWeight='bold'>{item.first_name}</Text>
                    <Text fontSize='md' color='grey'>{item.email}</Text>
                    {show && <Text fontSize='md' marginTop='20px'>789456123</Text>}
                </Grid>
            </Flex>
        </Box>
    </>
  )
}

export default Contact