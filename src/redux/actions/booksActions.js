import axios from 'axios'
const FIREBASE_URL = `https://m4mainevlas-default-rtdb.firebaseio.com/`

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS" 
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST"
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE"

export const ADD_BOOKS = "ADD_BOOKS"
export const fetchBooks= (id)=>async (dispatch)=>{
    dispatch({type:FETCH_BOOKS_REQUEST})
    try{
        const response = await axios.get('https://m4mainevlas-default-rtdb.firebaseio.com/${userId}/myBooks.json')
        const data = response.data
       const posts = data?Object.entries(data).map(([id,val])=>
                        ({
                            id,...val,

                        })
                    ):[]
        dispatch({type:FETCH_BOOKS_SUCCESS,payload:posts})
    }
    catch(error){
        dispatch({type:FETCH_BOOKS_FAILURE,payload:error})
    }
}

export const addBooks = (data)=>async (dispatch)=>{
    try{
        const res = await axios.post(FIREBASE_URL,{
            ...data,author:"",availability:"",status:"",title:""
        })
        dispatch({type:ADD_BOOKS,payload:res.data})
    }   
    catch(error){
        console.log("Please Try again")
    }
}