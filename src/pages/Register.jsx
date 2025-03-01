import React, { useState } from 'react'
import {VStack,Input,Button,Box,Heading} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

const Register = () => {
    const [register,setRegister]=useState("")
    const[password,setPassword] = useState("")
    const dispatch = useDispatch()
    const handleRegister=()=>{
        dispatch(register(email,password))
    }
  return (
    <VStack border={'2px solid #ddd'} display={'flex'}flexDirection={'column'}gap='5'p='15%'>
        <form>
            <Heading textAlign={'center'}>Register</Heading>
        <Input type="text" placeholder="Enter UserName" value={register}onChange={(e)=>setRegister(e.target.value)} />
        <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button marginLeft={'45%'} onClick={handleRegister}>Register</Button>
        </form>
        
    </VStack>
  )
}

export default Register
