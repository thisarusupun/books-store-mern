import express from "express";
import { Book } from "../models/bookModel.mjs";

const router = express.Router()

// create new book
router.post("/", async (request, response) => {
    try {
      const { body } = request;
      const newBook = {
        title: body.title,
        author: body.author,
        publishYear: body.publishYear,
      };
  
      const book = await Book.create(newBook);
      return response.status(201).send(book);
    } catch (error) {
      console.log(error);
    }
  });
  
  // get all books
  router.get("/", async (request, response) => {
    try {
      const books = await Book.find({});
      return response.status(200).json({
        count: books.length,
        data: books
      })
    } catch (error) {
      console.log(error);
    }
  })
  
  // get a book by id
  router.get("/:id", async(request, response) => {
    try {
      const {id} = request.params;
      const book = await Book.findById(id)
      return response.status(200).json(book)
  
    } catch (error) {
      console.log(error);
    }
  })
  
  // update a book
  router.put("/:id", async (request, response) => {
    try {
      const {params: {id}, body} = request
      const updatedBook = await Book.findByIdAndUpdate(id, body);
      return response.sendStatus(200).send("Updated")
  
    } catch (error) {
      console.log(error);
    }
  })
  
  // delete a book
  router.delete("/:id", async (request, response) => {
    try {
      const {id} = request.params
      const deletedBook = await Book.findByIdAndDelete(id)
      return response.status(200).send("Deleted")
  
    } catch (error) {
      console.log(error);
    }
  })

  export default router
  