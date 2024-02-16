import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const DeleteBook = () => {

  const {id} = useParams();

  const hanldeDelete = () => {
    axios.delete(`http://localhost:5555/books/${id}`)
  }

  return (
    <div>
      <button onClick={hanldeDelete}>
        Delete
      </button>
    </div>
  )
}

export default DeleteBook