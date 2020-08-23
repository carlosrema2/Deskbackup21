 
const orm = require("./config/orm.js");
//
// const run_many = async () => {
//     const parties = await orm.select("party_name", "parties");
//     console.log('parties', parties);
//     const clients = await orm.select("client_name", "clients");
//     console.log('clients', clients);
//     const grown_ups = await orm.selectWhere("parties", "party_type", "grown-up");
//     console.log('grown_ups', grown_ups);
//     const client_parties = await orm.leftJoin(["client_name", "party_name"], "clients", "parties", "id", "client_id");
//     console.log('client_parties', client_parties);
//     process.exit();
// }
//
// run_many();

const run_single = async () => {
    const results = await paul.select({
        columns: ['*'],
        table: 'parties',
        where: {
            key: 'id',
            value: 2
        },
        join: {
            type: 'INNER',
            table: 'clients',
            match_1: 'client_id',
            match_2: 'id'
        }
    });
    console.log(results);
    process.exit();
}
run_single();