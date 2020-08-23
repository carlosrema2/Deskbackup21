const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mysql2 = require('mysql2');
const routes = require('./controler/routes');
const connection = require('./config/config.js');
const app = express();
const PORT = 9000;
const run = async (app) => {
    const connected = await connection.connect();
     routes.route(app, connection);
}
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
run(app);
app.listen(PORT, () => {console.log("App listening on PORT: " + PORT)});