const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const connection = require("./connection");
const app = express();
const PORT = 9000;
const run = async (app) => {
    const mysqlConnect = await connection.connect();
    require("./routes")(app, mysqlConnect);
}
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
run(app);
app.listen(PORT, () => {console.log("App listening on PORT: " + PORT)});