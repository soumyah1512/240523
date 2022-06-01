import { Box, Button, Center, Flex, Input, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';

const GithubRepositories = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)
    const [query,setQuery] = useState('react')
    const [value,setValue] = useState(null)
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(()=> {
        setLoading(true)
        axios({
            url: `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=5`,
            method: "GET",
        })
        .then((res) => {
            setLoading(false);
            setData(res.data);
        })
        .catch((err) => {
            setLoading(false);
        })
    }, [query,page])
    !loading && console.log(data.items)
  return (
    <>
        <Box>
            <Center>
                <VStack gap={8}>

                <Flex width='400px' margin='30px' gap={4}> 
                    <Input placeholder='Search your query here...' onChange={(e)=>setValue(e.target.value)}/>
                    <Button onClick={()=>{setQuery(value);setPage(1)}}>Search</Button>
                </Flex>
                <Box>
                    {loading && <Center>Loading...</Center>}
                    {data?.items.length === 0 ? <div>Not a valid search query</div>
                    : data?.items?.map((item) => (
                        <Box key={item?.id} border='1px solid grey' marginBottom='10px' borderRadius='10px' padding='10px'>
                            <Center>
                                <VStack>
                                    <Text>Name: {item?.name}</Text>
                                    <Text>Full Name: {item?.full_name}</Text>
                                    <Text>Owner: {item?.owner?.login}</Text>
                                </VStack>
                            </Center>
                        </Box>
                    ))}
                </Box>
                <Pagination count={data?.total_count} page={page} onChange={handleChange} />
                </VStack>
            </Center>
        </Box>
    </>
  )
}

export default GithubRepositories