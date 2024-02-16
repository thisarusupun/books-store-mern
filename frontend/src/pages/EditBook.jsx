import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditBook = () => {

  const [book, setBook] = useState({
    title:"",
    author:"",
    publishYear:""
  })

  const {title, author, publishYear} = book;

  const {id} = useParams();

  useEffect(() => {
    getBook();
  }, [])

  const getBook = async () => {
    await axios.get(`http://localhost:5555/books/${id}`)
    .then(response => setBook(response.data))
  }

  const handleInput = (e) => {
    setBook({...book, [e.target.name] : e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5555/books/${id}`,book)
  }

  return (
    <div>
      <div>
        
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label>title</label>
          <input type="text" name='title' placeholder='Enter title' value={title} onChange={handleInput} />

          <label>author</label>
          <input type="text" name='author' placeholder='Enter author' value={author} onChange={handleInput} />

          <label>publish year</label>
          <input type="text" name='publishYear' placeholder='Enter year' value={publishYear} onChange={handleInput} />

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditBook