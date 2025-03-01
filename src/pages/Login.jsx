import React, { useState } from 'react'
import {VStack,Input,Button,Box,Heading} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import {login} from '../redux/actions/authActions'

const Login = () => {
    const [login,setLogin]=useState("")
    const[password,setPassword] = useState("")
    const dispatch = useDispatch()
    // const handleLogin=()=>{
    //     dispatch(login())
    // }
  return (
    <VStack border={'2px solid #ddd'} display={'flex'}flexDirection={'column'}gap='5'p='15%'>
        <form>
            <Heading textAlign={'center'}>Login</Heading>
        <Input type="text" placeholder="Enter UserName" value={login}onChange={(e)=>setLogin(e.target.value)} />
        <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button marginLeft={'45%'} >Login</Button>
        </form>
        
    </VStack>
  )
}

export default Login
