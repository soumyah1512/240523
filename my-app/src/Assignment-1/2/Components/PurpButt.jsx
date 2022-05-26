import { Button } from '@chakra-ui/react'
import React from 'react'

const PurpButt = ({text}) => {
  return (
    <Button variant="solid" colorScheme='purple.600' bgColor="purple.500" border='2px solid #543C9B' borderRadius='8px' color='white' width='150px'>
    {text}
  </Button>
  )
}

export default PurpButt