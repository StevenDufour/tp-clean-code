const bodyParser = require('body-parser');
const AuthController = require('../controllers').AuthController;

module.exports = function (app) {

    app.post('/api/auth/register', bodyParser.json(), async (req, res) => {
        if(req.body.firstname && req.body.lastname && req.body.login && req.body.password && req.body.email) {
            try {
                const user = await AuthController.register(req.body.firstname,
                    req.body.lastname,
                    req.body.login);
                res.status(201).json(user);
            } catch (err) {
                res.status(409).end();
            }
        }
        res.status(400).end();
    });

}
