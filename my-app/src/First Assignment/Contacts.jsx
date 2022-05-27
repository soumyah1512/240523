import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AccordionItem, Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react'
import Contact from './Contact'


const Contacts = () => {
    const [data,setData] = useState(null)
    
    useEffect(()=> {
        axios({
            url: "https://reqres.in/api/users",
            method: "GET",
        })
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log("ERROR")
        })
    }, [])
    console.log(data)
  return (
    <>
        {data?.data.map((item) => (
            <div key={item.id}>
                <Contact item={item}/>
            </div>
        ))}
    </>
  )
}

export default Contacts