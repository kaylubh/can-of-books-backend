// models
const Book = require('./models/book');

async function getBooks(request, response) {

  const filterQuery = {};

  if (request.query.title) {
    filterQuery.title = request.query.title;
  }

  const books = await Book.find(filterQuery);

  response.json(books);
}


async function createBook(request, response) {
  try {
    const newBook = await Book.create(request.body);
    response.status(201).send(newBook);

  } catch (error) {
    response.status(500).send('Error creating book');

  }

}
module.exports = {getBooks, createBook};


