import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet, useParams } from 'react-router-dom'

const Product = () => {
    const {id} = useParams()
    console.log(id)
    const [data,setData] = useState(null)
    useEffect(()=> {
        axios({
            url: `http://localhost:3000/products/${id}`,
            method: "GET",
        })
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])
  return (
    <div>
        <Center>
            <Box p={8} marginTop='30px'>
                <Box p={4} border='1px solid grey' marginBottom='2'>
                    <Center>
                        <VStack>
                        <Text>
                            {data?.name}
                        </Text>
                        <Text>
                            Price: {data?.price}
                        </Text>
                        </VStack>
                    </Center>
                </Box>
            </Box>
        </Center>
    </div>
  )
}

export default Product