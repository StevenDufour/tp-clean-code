const models = require('../models');
const User = models.User;

class AuthController {

    static register(firstname, lastname, login, type) {
        return User.create({
            firstname,
            lastname,
            login,
            type
        });
    }




}

module.exports = AuthController;
