

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
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`server running on port ${port}`));