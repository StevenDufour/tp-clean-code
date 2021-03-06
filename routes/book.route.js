const bodyParser = require('body-parser');
const BookController = require('../controllers').BookController;

module.exports = function (app) {

    app.post('/api/book/create', bodyParser.json(), async (req, res) => {
        if(req.body.title && req.body.author) {
            try {
                const book = await BookController.createBook(req.body.title,
                                                            req.body.author);
                res.status(201).json(book);

            } catch (err) {
                res.status(409).end();
            }
        }
        res.status(400).end();
    });

    app.get('/api/book/getAll', bodyParser.json(), async (req, res) => {
        try{
            const books = await BookController.selectAllBook();
            res.status(200).json(books);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.post('/api/book/getBookByTitle', bodyParser.json(), async (req, res) => {
        if(req.body.title) {
            try {
                const book = await BookController.selectBookByTitle(req.body.title);
                res.status(200).json(book);
            } catch (err) {
                console.log(err);
                res.status(409).end();
            }
        }
        res.status(400).end();
    });

    app.put('/api/book/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.title && req.body.author){
            try{
                const book = await BookController.updateBook(req.body.id,
                    req.body.title,
                    req.body.author);
                res.status(200).json(book);
            } catch(err) {
                res.status(409).end();
            }
        }
        res.status(400).end();
    });

    app.delete('/api/book/delete/:id', async (req, res) => {
        if(req.params.id){
            try {
                await BookController.deleteBook(req.params.id);
                res.status(200).send("This book is deleted");
            } catch (err) {
                res.status(409).end();
            }
        }
        res.status(400).end();

    });


}
