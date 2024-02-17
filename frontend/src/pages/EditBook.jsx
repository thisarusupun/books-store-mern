import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
  });

  const { title, author, publishYear } = book;

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    await axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => setBook(response.data));
  };

  const handleInput = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5555/books/${id}`, book);
    navigate("/")

  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-gray-300">
      <h1 className="text-2xl text-rose-700">Edit Book Details</h1>

      <div className="m-10 flex flex-col items-center text-2xl">
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label>Title</label>
            <input
              className="text-black"
              type="text"
              name="title"
              placeholder="Enter title"
              value={title}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col py-8">
            <label>Author</label>
            <input
              className="text-black"
              type="text"
              name="author"
              placeholder="Enter author"
              value={author}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col pb-8">
            <label>Publish year</label>
            <input
              className="text-black"
              type="text"
              name="publishYear"
              placeholder="Enter year"
              value={publishYear}
              onChange={handleInput}
            />
          </div>

          <div className="flex gap-10">
            <button
              type="submit"
              className="border border-red-700 hover:bg-red-500 rounded-xl w-fit px-4 py-2"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="border border-emerald-500 hover:bg-sky-700 rounded-xl w-fit px-4 py-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
