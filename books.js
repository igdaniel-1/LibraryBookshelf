const express = require('express');
const router = express.Router();
const books = require('./books.json');

// get all books
router.get('/', (req,res) => {
    res.json(books);
});

// get a specific book
router.get('/:id', (req,res) => {
    const {id} = req.params;
    res.json(books.filter((ele) => ele.id === parseInt(id)))
});

// add one book
router.post('/', (req,res) => {
    const body = req.body;
    console.log(body);
    books.push(body);
    res.json({message: 'The book has been added'});
});

// update one book
router.put('/:id', (req,res) => {
    const {id} = req.params;
    const body = req.body;
    books.forEach((book, index) => {
        if (book.id === parseInt(id)) {
            books[index] = body;
        }
    });
    res.json({message: `The book with id ${id} has been updated.`});
});
 
// delete one book
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    books.forEach((book,index) => {
        if (book.id === parseInt(id)){
            books.splice(index);
        }
    });
    res.json({message: `Book with id #${id} had been deleted.`});
});

// export router
module.exports = router;