import { Box, Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)
    useEffect(()=> {
        setLoading(true)
        axios({
            url: "http://localhost:3000/products",
            method: "GET",
        })
        .then((res) => {
            setLoading(false);
            setData(res.data);
        })
        .catch((err) => {
            setLoading(false);
        })
    }, [])
  return (
    <>
    {loading && <Center>Loading...</Center>}
        <Center>
            <Box p={8} marginTop='30px'>
                {data?.map((item) => (
                    <div key={item.id}>
                    <Link to={`/products/${item.id}`} >
                        <Box p={4} border='1px solid grey' marginBottom='2' >
                            <Center>{item.name}</Center>
                        </Box>
                    </Link>
                    </div>
                ))}
            </Box>
        </Center>
        <Outlet/>
        {/* <div>
            <Outlet/>
        </div> */}
    </>
  )
}

export default Products