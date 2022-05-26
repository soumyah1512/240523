import { Box, Button, ButtonGroup, Center, Flex, Heading, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <Box p='2' borderBottom='1px solid lightgray'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            <Center w='40px' h='40px' bg='tomato' color='white'>
                <Box as='span' fontWeight='bold' fontSize='lg'>
                <Image src='https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75' alt='Dan Abramov' />
                </Box>
            </Center>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='none' color='grey'>Sign In</Button>
                <Button colorScheme='purple' variant='outline'>Sign Up</Button>
                <Button colorScheme='purple'>Post a Job🚀</Button>
            </ButtonGroup>
        </Flex>
        </Box>
    </>
  )
}

export default Navbar