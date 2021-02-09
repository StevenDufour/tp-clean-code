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

    static updateBook(id, title, author){
        return Book.update({
            title:title,
            author:author
        }, {
            where: {
                id:id
            }
        });
    }

    static updateIsAvailableBook(id, isAvailable){
        return Book.update({
            isAvailable: isAvailable
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteBook(id) {
        await Book.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = BookController;
