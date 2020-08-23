const calc = require('./calc');

exports.route = (app) => {
    app.get('/add/:a/:b', calc.add);
}