const {request, response} = require("express")
const connection = require("./config/config")
exports.route = (app, connection) => {
    app.get('/status', (request,response) => {
        const status = {
            status: 'ok'
        }
        response.json(status);
    });
    app.get('/bid', async (request,response) => {
      console.log('Fetching Items');
      const dbquery = 'SELECT * FROM greatbay_db.auctions'
      connection.query(dbquery,(err,result)=>{
          if (err)throw err;
          response.json(result);
      });
      
    });

};