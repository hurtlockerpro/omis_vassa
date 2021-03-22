import { IBook } from './IBook'


const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


import { Request, Response } from 'express';

let port = 3000

let books:IBook[] = [
  {
    isbn:'isbn1',
    title: 'title 1',
    author: 'author 1',
    description: 'description 1',
    published_date: 'published_date 1'
  },
  {
    isbn:'isbn2',
    title: 'title 2',
    author: 'author 2',
    description: 'description 2',
    published_date: 'published_date 2'
  },
  {
    isbn:'isbn3',
    title: 'title 3',
    author: 'author 3',
    description: 'description 3',
    published_date: 'published_date 3'
  }
]

app.get('/', function (req:Request, res:Response) {
  res.send('Hello World')
})

app.get('/books', function (req:Request, res:Response) {
  res.send(books)
})


app.delete('/books/delete/:isbn', function (req:Request, res:Response) {
  console.log(req.params.isbn)

  let msg = 'Book is not found!'

  books.forEach( (book, index) => {
    if (book.isbn == req.params.isbn)
    {
      books.splice(index, 1)
      msg = 'Book successfully deleted'
    }
  })

  res.send(msg)
})


app.post('/books/add', function (req:Request, res:Response) {
  console.log(req.body)
  
  let status = 200
  let msg = 'Book is successfully added!'

  let book:IBook = 
    {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      description: req.body.descrition,
      published_date: req.body.published_date
    }
  books.push(book)

  res.status(status).send(msg)
})


app.get('/books/:isbn', function (req:Request, res:Response) {
  console.log(req.params.isbn)

  let bookItem = undefined
  books.forEach(book => {
    if (book.isbn == req.params.isbn)
    {
      bookItem = book
    }
  })

  res.send(bookItem)
})


app.post('/books/edit', function (req:Request, res:Response) {
  console.log(req.body)
  
  let status = 200
  let msg = 'Book is successfully edited!'

  books.forEach(book => {
    if (book.isbn == req.body.isbn)
    {
        book.isbn = req.body.isbn
        book.title = req.body.title
        book.author = req.body.author
        book.description = req.body.descrition
        book.published_date = req.body.published_date      
    }
  })

  res.status(status).send(msg)
})


 
app.listen(port, () => console.log('Server is working'))