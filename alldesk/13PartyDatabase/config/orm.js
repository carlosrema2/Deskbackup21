const mysql = require("./connection.js");
const orm = {
    select: async (whatToSelect, tableInput) => {
        const queryString = "SELECT ?? FROM ??";
        const connection = await mysql.connect();
        const [data] = await connection.query(queryString, [whatToSelect, tableInput]);
        return data;
    },
    selectWhere: async (tableInput, colToSearch, valOfCol) => {
        const queryString = "SELECT * FROM ?? WHERE ?? = ?";
        const connection = await mysql.connect();
        const [data] = await connection.query(queryString, [tableInput, colToSearch, valOfCol]);
        return data;
    },
    leftJoin: async (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) => {
        let queryString = "SELECT ?? FROM ?? AS tOne";
        queryString += " LEFT JOIN ?? AS tTwo";
        queryString += " ON tOne.?? = tTwo.??";
        const connection = await mysql.connect();
        const [data] = await connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol]);
        return data;
    }
};
module.exports = orm;