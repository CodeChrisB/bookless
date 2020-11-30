import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";
import e from "express";
import express from "express";
import { Client, DataType }  from "ts-postgres";
import { postgresqlErrorCodes } from "ts-postgres/dist/src/errors";
async function main() {
    const client = new Client({"host":"database", "port": 5432, "user": "user", "password":"pass", "database":"booklessdb"});
    await client.connect();

    console.log('db works')
    try{
        const resultIterator = client.query("select * from product")
 
        for await (const row of resultIterator) {
            console.log(row); // output data in the console
        }
    } finally{
        await client.end();
    }
}


const app = express();

app.get('/', (req, res) => {
    res.send('Hello Bookless 213');
});

app.listen(3000, () => {
    main()
    console.log('Running on Port 3000');
});