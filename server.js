const express = require('express')
const app = express()
const port = 3000

let books = [
    {"id" : 1 , "title" : "Clean Code" , "author" : "Robert C.Martin","year" : 2008},
    {"id" : 2 , "title" : "The Pragmatic Programmer" , "author" : "Andrew Hunt" , "year" : 1999},
    {"id" : 3 , "title" : "Design Patterns" , "author" : "Something" , "year" : 2001}
]

app.get('/', (req, res) => {
    let bookList = books;
    console.log(...bookList);
    res.send(bookList);
})

app.get('/:id',(req,res) =>{
    for(let i = 0 ; i < books.length ; i++){
        if(books.id == id){
            res.send(books[i]);
        }
    }
    res.send(404);
})

app.post('/books',(req,res) =>{
    const newBook = req.body;
    console.log("New Book Fetched from request");
    books.push({newBook});
    res.status(200).json({message : 'New Book Created'});
})

app.delete('/books/:id', (req, res) => {
    const userId = req.params.id;
    for(let i = 0 ; i < books.length ; i++){
        if(books[i].id == userId){
            books.erase(i);
        }
    } 
    res.json({ message: `Books with ID ${id} deleted`});
});

app.listen(port,() => {
  console.log(`Started Server ${port}`)
})