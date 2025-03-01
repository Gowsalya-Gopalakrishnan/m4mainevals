import Home from '@/pages/Home'
import { logout } from '@/redux/actions/authActions'
import { Flex,Heading ,Box, Button,Text} from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const user = useSelector((state)=>state.auth.user)
    const dispatch = useDispatch('')

    const handleLogout=()=>{
        dispatch(logout())
    }
  return (
   <Flex bg={'blue.400'} p={5} display={'flex'}flexDirection={'row'}gap={"35%"}>
    <Heading>MyBookStore</Heading>
    <Home/>
    <Box display={'flex'} flexDirection={'row'} gap='5'  >
    <NavLink to='/mybookstore'>MyBookStore</NavLink>
    
    <Box>
        {user ? <Flex>
            <Text>{user.email}</Text>
            <Button onClick={handleLogout}>Logout</Button>
        </Flex>:<NavLink to='/login'>
                <Button>Login</Button>
        </NavLink>}
    </Box>
    <NavLink to='/register'>Register</NavLink>
    </Box>

   </Flex>
  )
}

export default Navbar
