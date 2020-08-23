exports.route = (app, connection) => {
    
    app.get("/status", async (request, response) => {
        const status= {
             status : 'ok'
        }
        response.json(status); 
    });
    
    app.get("/all", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM Top5000`);
        response.json(data);
    });
    
 app.get("/artist/:artist", async (request, response) => {
        const artistname = request.params.artist.split('-');
        const [data] = await connection.query(`SELECT * FROM Top5000 WHERE LOWER(artist) = LOWER(?)`, [artistname.join(' ')]);
        response.json(data);
    });
//A query which searches for a specific song in the top 5000 and returns the data for it; endpoint: '/artist/:song-name' 
    app.get("/song/:song", async (request, response) => {
        const songname = request.params.song.split('-');
        const [data] = await connection.query(`SELECT * FROM Top5000 WHERE LOWER(song) = LOWER(?)`, [songname.join(' ')]);
        response.json(data);
    });
//A query which returns all data contained within a specific range; endpoint: '/position/:start/:end'
    app.get("/position/:start/:end", async (request, response) => {
        const start = request.params.start;
        const end = request.params.end;
        const [data] = await connection.query(`SELECT * FROM Top5000 WHERE position >= ? AND position <= ?`, [start,end]);
        response.json(data);
    });
//A query which returns all artists who appear within the top 5000 more than once, endpoint: '/multi-artist'
    app.get("/multiartist", async (request, response) => {
        const [data] = await connection.query(`
        SELECT artist,
        COUNT(artist) AS occurance 
        FROM Top5000 
        GROUP BY artist
        HAVING COUNT(artist) > 1
        ORDER BY COUNT(artist) DESC;`);
        response.json(data);
    });


    
    // app.post("/customers", async (request, response) => {
    //     const [data] = await connection.query(`INSERT INTO Customers SET ?`, request.body);
    //     response.json({created: true, customer_id: data.insertId, ...request.body});
    // });
    
    // app.get("/customers/id/:customer_id", async (request, response) => {
    //     const customer_id = request.params.customer_id;
    //     const [data] = await connection.query(`SELECT * FROM Customers WHERE customer_id = ?`, [customer_id]);
    //     response.json(data);
    // });
    // app.get("/customers/email/:email", async (request, response) => {
    //     const email = request.params.email;
    //     const [data] = await connection.query(`SELECT * FROM Customers WHERE email = ?`, [email]);
    //     response.json(data);
    // });
    // app.patch("/customers/id/:customer_id", async (request, response) => {
    //     const customer_id = request.params.customer_id;
    //     const updated = request.body;
    //     const [data] = await connection.query(`UPDATE Customers SET ? WHERE customer_id = ?`, [updated, customer_id]);
    //     response.json({updated: true, customer_id, ...request.body});
    // });
};