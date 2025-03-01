import React, { useState } from 'react'
import {VStack,Input,Button,Box,Heading} from '@chakra-ui/react'

const Register = () => {
    const [register,setRegister]=useState("")
    const[password,setPassword] = useState("")
    const handleRegister=()=>{

    }
  return (
    <VStack border={'2px solid #ddd'} display={'flex'}flexDirection={'column'}gap='5'p='15%'>
        <form>
            <Heading textAlign={'center'}>Register</Heading>
        <Input type="text" placeholder="Enter UserName" value={register}onChange={(e)=>setRegister(e.target.value)} />
        <Input type="password" placeholder="Enter Password" value={password} onChange={()=>setPassword(e.target.value)}/>
        <Button marginLeft={'45%'} onClick={handleRegister}>Register</Button>
        </form>
        
    </VStack>
  )
}

export default Register
