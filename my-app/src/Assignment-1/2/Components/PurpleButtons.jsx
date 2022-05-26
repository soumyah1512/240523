import { Flex } from '@chakra-ui/react'
import React from 'react'
import PurpButt from './PurpButt'

const PurpleButtons = () => {
  return (
      <>
      <Flex gap={3} justifyContent="center" margin='20px'>
            <PurpButt text="🌍 Remote"/>
            <PurpButt text="<> Tech"/>
            <PurpButt text="📈 Marketing"/>
      </Flex>
      </>
  )
}

export default PurpleButtons