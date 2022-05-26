import { Box, Button, ButtonGroup, Center, Flex, Heading, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <Box p='2' borderBottom='1px solid #E2E8F0' padding='10px 14px' bgColor={'white'}>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box>
            <Center w='32px' h='32px' bg='tomato' color='white'>
                <Box as='span' fontWeight='bold' fontSize='md'>
                <Image src='https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75' alt='Dan Abramov' />
                </Box>
            </Center>
            </Box>
            <Spacer />
            <ButtonGroup gap='.5' >
                <Button fontWeight='400' colorScheme='none' color='grey' fontSize='sm'>Sign In</Button>
                <Button fontWeight='400' colorScheme='purple' fontSize='sm' variant='outline'>Sign Up</Button>
                <Button colorScheme='purple' fontSize='sm' bgGradient='linear(to-r, purple.500, blue.500)'>Post a Job🚀</Button>
            </ButtonGroup>
        </Flex>
        </Box>
    </>
  )
}

export default Navbar