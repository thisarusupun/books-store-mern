import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hanldeDelete = () => {
    axios.delete(`http://localhost:5555/books/${id}`);
    navigate("/")
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-gray-300 flex items-center justify-center">
      <div>
        <h1 className="text-5xl text-rose-700">Do You Want to Delete the Book ???</h1>

        <div className="flex gap-10 justify-center p-10">
          <button
            className="border border-emerald-500 hover:bg-sky-700 rounded-xl w-fit px-4 py-1"
            onClick={() => navigate("/")}
          >
            No
          </button>

          <button
            className="border border-red-500 hover:bg-red-700 rounded-xl w-fit px-4 py-1"
            onClick={hanldeDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
