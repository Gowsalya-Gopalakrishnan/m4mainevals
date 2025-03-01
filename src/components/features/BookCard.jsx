import { Box, Container,Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const BookCard = () => {
    const books = useSelector((state)=>state.book.books)
    const loading = useSelector((state)=>state.book.loading)
    const error = useSelector((state)=>state.book.error)
    const dispatch = useDispatch()
  return (
    <Container>
        <Box>
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}
            <Heading>My Books</Heading>
            {books.length>0 && books.map((book)=>{
                return(
                    <Box>
                        <img src={book.coverImage} alt={book.title}/>
                       <h3>{book.author}</h3> 
                       <h4>{book.title}</h4>
                       <p>{book.availability}</p>
                       <p>{book.status}</p>
                    </Box>
                )
            })}
        </Box>
    </Container>
  )
}

export default BookCard
