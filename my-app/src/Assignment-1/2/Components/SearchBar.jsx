import { Box, Center, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import FilterIcon from './FilterIcon'


const SearchBar = () => {
  return (
    <>
    <Box bgColor={'white'}>
        <Center width='32%' margin='auto'>
            <Input boxShadow='xl' size='lg' placeholder='Type job title or keyword'  _placeholder={{ opacity: .7, color: 'gray.500', fontSize: '16px' }} borderRadius='12px'/>
            <IconButton bgColor={'#E2E8F0'} aria-label='Search database' icon={<FilterIcon/>} height='48px' width='50px' padding='0px 16px' borderRadius='12px' margin='0px 10px'/>
        </Center>
    </Box>
    </>
  )
}

export default SearchBar