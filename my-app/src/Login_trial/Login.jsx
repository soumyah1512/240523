import { Box, Button, Center, Input, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuthChecked } from './Redux/auth/action'

const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    var token = {token:false}
    localStorage.setItem('token', JSON.stringify(token))



    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        // dispatch(
        //     getAuthChecked({email, password})
        // )
        // .then(() => {
        //     navigate('/home', {replace: true})
        // })
        axios.post("https://reqres.in/api/login",{email,password})
            .then((res) => {
                console.log(res.data);
                var token = {token:true};
                // console.log(token);
                localStorage.setItem('token', JSON.stringify(token));
                
            })
            .then(()=> {
                navigate('/home', {replace: true})
            })

    }

  return (
    <>
        <Box>
            <Center>
                <Box w='40%' p='4' borderRadius='5px' mt='50px' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
                    <VStack>
                    <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                    <Input placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <Button onClick={handleLogin}>Login</Button>
                    </VStack>
                </Box>
            </Center>
        </Box>
    </>
  )
}

export default Login