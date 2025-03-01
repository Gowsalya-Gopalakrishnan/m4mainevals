import axios from 'axios'
const FIREBASE_URL = `https://m4mainevlas-default-rtdb.firebaseio.com/`

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS" 
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST"
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE"

export const fetchBooks= (id)=>async (dispatch)=>{
    try{
        const response = await axios.get('https://m4mainevlas-default-rtdb.firebaseio.com/${userId}/myBooks.json')
        const data = response.data
       const posts = data?Object.entries(data).map(([id,val])=>
                        ({
                            id,...val,
                            
                        })
                    ):[]
    }
    catch(error){

    }
}