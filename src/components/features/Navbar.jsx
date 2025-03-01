import Home from '@/pages/Home'
import { Flex,Heading ,Box} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <Flex bg={'blue.400'} p={5} display={'flex'}flexDirection={'row'}gap={"35%"}>
    <Heading>MyBookStore</Heading>
    <Home/>
    <Box display={'flex'} flexDirection={'row'} gap='5'  >
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/register'>Register</NavLink>
    </Box>

   </Flex>
  )
}

export default Navbar
