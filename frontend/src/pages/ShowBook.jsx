import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowBook = () => {

  const navigate = useNavigate();
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
    <div className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-gray-300">
      <h1 className="text-2xl text-rose-700">Book details</h1>
      <div className='flex flex-col justify-center items-center text-2xl p-4'>

        <div className='p-4 flex flex-col justify-center items-center'>
        <h1>Book Name : {book.title}</h1>
        <h1>Author Name : {book.author}</h1>
        <h1>Publish Year : {book.publishYear}</h1>
        </div>
        

        <button className='border border-emerald-500 hover:bg-green-500 rounded-xl w-fit px-4 py-1'
      onClick={() => navigate("/")}>Back</button>
      </div>

      
    </div>
  )
}

export default ShowBook