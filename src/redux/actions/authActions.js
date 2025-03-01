import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import {auth}  from '../../firebase/firebaseConfig'

export const LOGIN_USER = "LOGIN_USER"
export const REGISTER_USER ="REGISTER_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const login = (email,password,navigate)=>async (dispatch)=>{
    try{
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
        dispatch({type:LOGIN_USER,payload:userCredentials.user})
        navigate("/mybookstore")
    }
    catch(error){
        console.log("Please try again")
    }
}

export const register = (email,password)=>async (dispatch)=>{
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        dispatch({type:REGISTER_USER,payload:userCredentials.user})
    }
    catch(error){
        console.error("Plaser try again")
    }
}

export const logout=()=>async(dispatch)=>{
    try{
        await signOut(auth)
        dispatch({type:LOGOUT_USER})
    }   
    catch{
        console.error("Please try again")
    }
}