'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMovieList = getMovieList;
var db = require('../config/db');
var session = require('../config/db');

var movie = {
    name: { type: String },
    year: { type: Number }
};

function getMovieList() {
    db.readTxResultPromise.then(function (result) {
        console.log(result);
        session.close();
    });
}
//# sourceMappingURL=movie.js.map