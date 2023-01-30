const connection = require("./config/connection.js");

connection.query(
    '',
    function(err, results, fields) {
        console.table(results);
    }
);