import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.mjs";
import mongoose from "mongoose";
import bookRoute from "./routes/booksRoute.mjs";
import cors from 'cors'

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());

// app.use(cors({
//   origin: 'http://localhost/5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type']
// }))

app.get("/", (request, response) => {
  return response.status(200).send("Hello World");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
