const express   = require('express');
const bodyParser= require('body-parser');
const mongoose  = require('mongoose');
const db        = mongoose.connect('mongodb://localhost/bookApi');

const app       = express();
const port      = 5000;

const Book      = require('./models/bookModel');


const  bookRouter = require('./routes/bookroutes')(Book);
// const  authorRouter = require('./routes/authorroutes');

app.get('/', (req, res) => {
    res.send('welcome to my api');
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/books', bookRouter );
// app.use('/api/authors', authorRouter)







app.listen(port, () => {
    console.log('listiong port no:', port);
});