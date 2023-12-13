// dependencies
require('dotenv').config();
const cors = require('cors');
// express
const express = require('express');
const app = express();
// port
const PORT = process.env.PORT || 3005;
// modules
const {getBooks, createBook} = require('./book-handlers');
// database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);






// middleware
app.use(cors());
app.use(express.json());



// routes
app.get('/test', (request, response) => {
  response.send('test request received');
});




app.get('/books', getBooks);
app.post('/books', createBook);





// start
app.listen(PORT, () => console.log(`listening on ${PORT}`));
