

import 'dotenv/config';
import express from 'express';

import mongoose from 'mongoose';

// bring in our model
import Book from './models/Book.js';



mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((e) => console.log(e));

const app = express();
// console.log(process.env.MONGO_URI);

//apply our middleware (for POST and PUT/PATCH )
app.use(express.json());

const port = process.env.PORT || 3000;

//handle a POST request to create a new document
app.post("/api/books", async (req,res) =>{
    //create a new document for the books colllection (temporary)
    const newBook = new Book({
        // title:"The Life of Bob",
        title: req.body.title,
        author :req.body.author,
        publicationYear: req.body.publicationYear
    });

    //Save this book document in our database (permanently)
    await newBook.save();

    // always respond
    res.status(201).json(newBook);

})

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`server running on port ${port}`));