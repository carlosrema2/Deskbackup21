const Calculator = require('./classes/calculator');

exports.add = (request, response) =>{
    const calc = new Calculator();
    const solution = calc.add(parseInt(request.params.a),  parseInt(request.params.b));
    response.json({solution});
}