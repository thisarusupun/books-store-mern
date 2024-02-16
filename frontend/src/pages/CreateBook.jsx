import React, { useState } from 'react'
import axios from 'axios'

const CreateBook = () => {

  const [book, setBook] = useState({
    title:"",
    author:"",
    publishYear:""
  })

  const {title, author, publishYear} = book

  const handleInput = (e) => {
    setBook({...book, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5555/books", book)
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

export default CreateBook