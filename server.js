'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book');

const app = express();

const PORT = process.env.PORT || 3005;

// middleware
app.use(cors());

// routes
app.get('/test', (request, response) => {
  response.send('test request received');
});
app.get('/books', getBooks);

// handlers
async function getBooks(request, response) {

  const filterQuery = {};

  const books = await Book.find(filterQuery);

  response.json(books);
}

// start
app.listen(PORT, () => console.log(`listening on ${PORT}`));
