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

module.exports = getBooks;
