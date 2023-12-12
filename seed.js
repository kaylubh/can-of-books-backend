require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book');

async function seedBooks() {
  await Book.create(
    [
      {
        title: 'Book 1',
        description: 'Book Description 1',
        status: true
      },
      {
        title: 'Book 2',
        description: 'Book Description 2',
        status: true
      },
      {
        title: 'Book 3',
        description: 'Book Description 3',
        status: true
      }
    ]
  );

  mongoose.disconnect();
}

seedBooks();
