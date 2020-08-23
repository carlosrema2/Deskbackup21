exports.route = (app, connection) => {
    app.post("/customers", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO Customers SET ?`, request.body);
        response.json({created: true, customer_id: data.insertId, ...request.body});
    });
    app.get("/customers", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM Customers`);
        response.json(data);
    });
    app.get("/customers/id/:customer_id", async (request, response) => {
        const customer_id = request.params.customer_id;
        const [data] = await connection.query(`SELECT * FROM Customers WHERE customer_id = ?`, [customer_id]);
        response.json(data);
    });
    app.get("/customers/email/:email", async (request, response) => {
        const email = request.params.email;
        const [data] = await connection.query(`SELECT * FROM Customers WHERE email = ?`, [email]);
        response.json(data);
    });
    app.patch("/customers/id/:customer_id", async (request, response) => {
        const customer_id = request.params.customer_id;
        const updated = request.body;
        const [data] = await connection.query(`UPDATE Customers SET ? WHERE customer_id = ?`, [updated, customer_id]);
        response.json({updated: true, customer_id, ...request.body});
    });
};