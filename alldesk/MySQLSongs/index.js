
const mysql = require('mysql2/promise');
 
const connect = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'songs',
    });
    return connection;
}
const queryAllSongs = async (connection) => {
    const [data] = await connection.query("SELECT * FROM songs");
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id + " | " + data[i].title + " | " + data[i].artist + " | " + data[i].genre);
    }
    console.log("-----------------------------------");
}
const queryDanceSongs = async (connection) => {
    const [data] = await connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"]);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id + " | " + data[i].title + " | " + data[i].artist + " | " + data[i].genre);
    }
}
const run = async () => {
    const connection = await connect();
    await queryAllSongs(connection);
    await queryDanceSongs(connection);
    connection.end();
}
run();