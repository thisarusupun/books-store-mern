import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
  });

  const { title, author, publishYear } = book;

  const handleInput = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5555/books", book);
    navigate("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-gray-300">
      <div>
        <h1 className="text-2xl text-rose-700">Books List</h1>

        <div>
          <form className="flex flex-col p-4">
            <div className="grid grid-cols-4">
              <label className="col-span-1">Title</label>
              <input
                className="col-span-3 text-black"
                type="text"
                name="title"
                placeholder="Enter title"
                value={title}
                onChange={handleInput}
              />
            </div>

            <div className="py-4 grid grid-cols-4">
              <label className="col-span-1">Author</label>
              <input
                className="col-span-3 text-black"
                type="text"
                name="author"
                placeholder="Enter author"
                value={author}
                onChange={handleInput}
              />
            </div>

            <div className="grid grid-cols-4">
              <label className="col-span-1">Publish year</label>
              <input
                className="col-span-3 text-black"
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
    </div>
  );
};

export default CreateBook;
