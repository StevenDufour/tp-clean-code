const models = require('../models');
const Loan = models.Loan;

class LoanController {

    static createLoan(price, idUser, idBook){
        const loan = Loan.create({
            IdUser:idUser,
            IdBook:idBook
        });
        return loan;
    }

    static selectLoanByUser(idUser){
        return Loan.findOne({
            where: {
                idUser: idUser
            }
        });
    }

    static selectAllLoanByDate(date){
        return Loan.findAll({
            where: {
                date: date
            }
        });
    }

}

module.exports = LoanController;
