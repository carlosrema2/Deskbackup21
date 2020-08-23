const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const connection = require("./connection");
const routes = require("./routes");
const app = express();
const PORT = 9000;

const run = async (app) => {
    const mysqlConnect = await connection.connect();
    routes.route(app, mysqlConnect);
}
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
run(app);

app.listen(PORT, () => console.log(`API is listening on port ${PORT}`));