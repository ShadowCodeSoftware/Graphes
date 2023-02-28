const neo4j = require('neo4j-driver');

const uri = 'bolt://localhost:7687';
const user = 'root';
const password = 'password';
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

driver
  .verifyConnectivity()
  .then(() => console.log('Connected to Neo4j database !'))
  .catch(error => console.error(`An error has occurred during connectivity verification: ${error}`));

const session = driver.session();

const db = {};
db.neo4j = neo4j;
db.driver = driver;
db.session = session;

module.exports = db;