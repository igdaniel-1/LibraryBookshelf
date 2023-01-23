const express = require('express');
// import book file
const books = require('./books')
const port = 3000;

const app = express();
app.use(express.json());
app.use('/api/v1/books', books)

app.listen(port, () => {
    console.log(`Server listening at https://localhost:${port}`);
})
