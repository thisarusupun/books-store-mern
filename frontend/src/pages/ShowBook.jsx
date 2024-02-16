import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowBook = () => {

  const [book, setBook] = useState({
    title:"",
    author:"",
    publishYear:""
  })

  const {id} = useParams();

  const getBook = async () => {
    await axios.get(`http://localhost:5555/books/${id}`)
    .then(response => setBook(response.data))
  }

  useEffect(()=> {
    getBook();
  }, [])

  return (
    <div>
      <h1>Book details</h1>
      <div>
        <h1>name : {book.title}</h1>
        <h1>author : {book.author}</h1>
        <h1>publish year : {book.publishYear}</h1>
      </div>
    </div>
  )
}

export default ShowBook