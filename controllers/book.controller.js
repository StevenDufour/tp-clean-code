const models = require('../models');
const Book = models.Book;

class BookController {

    static createBook(title, author) {
        return Book.create({
            title,
            author
        });
    }

    static selectAllBook() {
        return Book.findAll();
    }

    static selectBookByTitle(title) {
        return Book.findOne({
            where: {
                title: title
            }
        });
    }
}

module.exports = BookController;
