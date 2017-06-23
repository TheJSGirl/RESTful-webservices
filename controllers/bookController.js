const bookController =  (Book) => {
    
    
    const get = (req, res) => {
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
            });

        }
    const post = (req, res) => {
        const book = new book(req,body);

        book.save();
        res.status(201).send(book);
    }

    return {
        get  : get,
        post : post
    }

}

module.exports = bookController;