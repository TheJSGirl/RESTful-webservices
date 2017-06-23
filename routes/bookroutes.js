const express   = require('express');
const bookRouter = express.Router();

const routes= () => {

    bookRouter.route('/Books')
        .get((req, res) => {
            const query = {};
            // const responseJson ={hello : 'this is my api'};
            // res.json(responseJson);
            if(res.query.genre){
                query.genre = req.query.genre;
            }
            Book.find((err, books) => {
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(books);
                }
            })

        })
        .post((req, res) => {
            let book = new Book(req.body);
            book.save();
            // console.log(book);
            res.status(201).send(book);
        });

    bookRouter.use('/bookId', (req, res, next) => {
         Book.findById(req.params.bookId, (err, books) => {
                if(err){
                    res.status(500).send(err);
                }
                else if(book){
                    res.book = book;
                    next();
                }
                else{
                    res.status(400).send('no book found');
                }
            })

    })

    bookRouter.route('/Books/:bookId')
        .get((req, res) => {
            res.json(req.book);
            })
        .put((req, res) => {
            
            res.book.title  = req.body.title;
            res.book.author = req.body.author;
            res.book.genre  = req.body.genre;
            res.book.read   = req.body.read;

            res.book.save((err) => {
                 if(err){
                    res.status(500).send(err);
                }
                else{
                     res.json(req.book);
                }
            });
            
        })

        .patch((req, res) => {
            if(req.body._id){
                delete req.body._id;
            }
                for(var p in req.body){
                    req.body[p] = req.body[p];
                }
            req.body.save( (err) => {
                if(err){
                    res.status(500).send(err);
                }
                else{
                     res.json(req.book);
                }
            });
        })

        .delete( () => {
             req.book.remove( (err) => {
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(204).send('Removed');
                }
             });
        })


    return bookRouter;

}


module.exports = routes;