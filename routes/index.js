module.exports = function () {
    require('./book.route')(...arguments);
    require('./auth.route')(...arguments);
    require('./loan.route')(...arguments);
}
