import ServiceConstants from '../serviceConstants';

let neo4j = require('neo4j-driver').v1;
let driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo", "one"));
let session = driver.session();


class DB {


    readData(){
    return session.readTransaction(function (transaction) {
        transaction.run('MATCH (n:Movie) RETURN n LIMIT 25');
    });
}
}

export default DB;



