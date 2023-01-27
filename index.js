const connection = require("./config/connection.js");

connection.query(
    'SHOW DATABASES',
    function(err, results, fields) {
        console.log(results);
        console.log(fields);
    }
);