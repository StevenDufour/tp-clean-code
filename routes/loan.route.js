const bodyParser = require('body-parser');
const LoanController = require('../controllers').LoanController;

module.exports = function (app) {

    app.post('/api/loan/create', bodyParser.json(), async (req, res) => {
        if(req.body.UserId, req.body.BookId) {
            try {
                const loan = await LoanController.createLoan(req.body.UserId, req.body.BookId);
                res.status(201).json(loan);
            } catch (err) {
                res.status(409).end();
            }
        }
        res.status(400).end();
    });



}
