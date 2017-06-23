const bookController =  (Book) => {
    const post = (req, res) => {
        const book = new book(req,body);

        book.save();
        res.status(201).send(book);
    }
    
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

        return {
            post : post,
            get  : get
        }

}

module.exports = bookController;