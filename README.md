# Library Bookshelf with NodeJS


## Premise
I encountered this problem on Geeks for Geeks, which introduced this problem as "the basic project created using NodeJS and Express.js"; note the use of "the" instead of "a". That's why I had to make it haha.

### The instructions are as follows:
> Build a book directory or an app with having a collection of books where you can create endpoints using 4 basic methods: GET, PUT, POST, and DELETE. Do check whether NodeJS and MongoDB are installed in prior, modules like nodemon to auto-restart NodeJS, server, body-parser to read & display response in JSON form, and other required modules. Keep index.js as the root file from where you can redirect to other sub-components and files.

### Features of Books Directory:
- Management of database using POSTMAN.
- Search bar to search for the required book.
- Side menu option which lists all the authors, genres, etc.
- Ensuring whether proper API calls are made and routes are connected.
- Technologies to use: Nodejs, Express, MongoDB (NoSQL database).


## My personal modification to the Premise
I'm hoping to use this bookshelf to store note archives. In order to do so, I would like:

- Each book labelled with a month.
- Each book contains all my notes from that month in chronological order.
- Each month a new book is created.
- A user can write a note within the app.
- That note gets added to the current month's book.

So essentially users can only write to the most recent book, others are read only. 
