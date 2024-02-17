import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    await axios
      .get("http://localhost:5555/books")
      .then((response) => setBooks(response.data.data));
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-gray-300">
      <div className="px-4">
        <h1 className="text-2xl text-rose-700">Books List</h1>

        <div className="m-2 px-6 py-2 w-fit border border-teal-700 hover:border-transparent rounded-2xl">
          <Link
            to="/books/create"
            className="group flex items-center hover:scale-125 hover:text-sky-500 duration-200"
          >
            <h1 className="pr-2">Add New Book</h1>
            <MdOutlineAddBox className="group-hover:text-green-500 group-hover:rotate-180 duration-700" />
          </Link>
        </div>

        <div className=" p-2 rounded-lg">
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md px-2">No</th>
                <th className="border border-slate-600 rounded-md px-2">
                  Title
                </th>
                <th className="border border-slate-600 rounded-md px-2">
                  Author
                </th>
                <th className="border border-slate-600 rounded-md px-2">
                  Publish year
                </th>
                <th className="border border-slate-600 rounded-md px-2">
                  Operations
                </th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="group hover:scale-105 duration-200">
                  <td className="border border-slate-700 group-hover:border-gray-500 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 group-hover:border-gray-500 rounded-md text-center">
                    {book.title}
                  </td>
                  <td className="border border-slate-700 group-hover:border-gray-500 rounded-md text-center">
                    {book.author}
                  </td>
                  <td className="border border-slate-700 group-hover:border-gray-500 rounded-md text-center">
                    {book.publishYear}
                  </td>

                  <td className="border border-slate-700 group-hover:border-gray-500 rounded-md text-center">
                    <div className="flex justify-evenly gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-md text-green-400 hover:text-xl hover:text-green-700 duration-200" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-md text-yellow-400 hover:text-xl hover:text-yellow-700 duration-200" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-md text-red-400 hover:text-xl hover:text-red-700 duration-200" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
