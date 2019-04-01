
var neo4j = require('neo4j-driver').v1;
var express = require('express');

var driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo", "one"));
var session = driver.session();
  

  // Create our Express application
  var app = express();
  
  // Use environment defined port or 3000
  var port = process.env.PORT || 3000;
  
  // Create our Express router
  var router = express.Router();
  
  // Initial dummy route for testing
  // http://localhost:3000/api
  router.get('/', function(req, res) {
    var readTxResultPromise = session.readTransaction(function (transaction) {
  
        var result = transaction.run('MATCH (n:Movie) RETURN n LIMIT 25');
        return result;
      });;
      readTxResultPromise.then(function (result) {
        session.close();
       // console.log(result.records);

        result.records[0].forEach(e =>{
            res.json(e);
        })
      }).catch(function (error) {
        console.log(error);
      });
    
  });
  
  // Register all our routes with /api
  app.use('/api', router);
  
  // Start the server
  app.listen(port);
  console.log('Insert beer on port ' + port);
  