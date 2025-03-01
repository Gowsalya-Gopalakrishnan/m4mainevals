import React, { useState } from 'react'
import {VStack,Input,Button,Box,Heading} from '@chakra-ui/react'

const Login = () => {
    const [login,setLogin]=useState("")
    const[password,setPassword] = useState("")
    const handleLogin=()=>{

    }
  return (
    <VStack border={'2px solid #ddd'} display={'flex'}flexDirection={'column'}gap='5'p='15%'>
        <form>
            <Heading textAlign={'center'}>Login</Heading>
        <Input type="text" placeholder="Enter UserName" value={login}onChange={(e)=>setLogin(e.target.value)} />
        <Input type="password" placeholder="Enter Password" value={password} onChange={()=>setPassword(e.target.value)}/>
        <Button marginLeft={'45%'} onClick={handleLogin}>Login</Button>
        </form>
        
    </VStack>
  )
}

export default Login
