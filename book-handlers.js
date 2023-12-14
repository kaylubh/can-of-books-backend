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

async function deleteBook(request, response) {
  const id = request.params.id;

  try {
    await Book.findByIdAndDelete(id);
    response.status(204).send('success');
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete book with id ${id}`);
  }

}
module.exports = {getBooks, createBook, deleteBook};


