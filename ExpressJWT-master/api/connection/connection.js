/*onst pg  = require('pg');

const client = new pg.Client({
  host: 'ec2-44-205-63-142.compute-1.amazonaws.com',
  user: 'efubldjdocxyov',
  database: 'd45qhvjntukogi',
  password: '36cd41f24860fb180292a0d7f07d28eddfcde0c6a81c8fd1a9a44f50ebd503cb',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

const getExamenes = async () => {
  const query = "select * from examen;";
  try {
    await client.connect();
    const { rows } = await client.query(query);
    console.log(rows);
  } catch(error) {
    console.log(error.stack);
  } finally {
    //await client.end();
  }
}

getExamenes();

console.log('asfsd');


module.exports= client;*/


const {Pool}  = require('pg');

const config = {
  user: 'postgres',
  host:'localhost',
  database: 'DDLab',
  password: '123456',
}

const pool = new Pool(config)

module.exports=pool;


