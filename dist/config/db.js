"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo", "one"));
var session = driver.session();

var readTxResultPromise = session.readTransaction(function (transaction) {
    transaction.run(ServiceConstants.GET_MOVIES);
});

exports.default = readTxResultPromise;
//# sourceMappingURL=db.js.map