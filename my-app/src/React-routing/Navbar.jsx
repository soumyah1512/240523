import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Center>
            <Flex gap="30px" padding="10px">
                <Link to="/">
                    <Text fontSize="24px">Home</Text>
                </Link>
                <Link to="/products">
                    <Text fontSize="24px">Products</Text>
                </Link>
            </Flex>
        </Center>
    </>
  )
}

export default Navbar