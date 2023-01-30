const connection = require("./config/connection.js");

connection.query(
    'SELECT * FROM departments',
    function(err, results, fields) {
        console.table(results);
    }
);

connection.query(
    'SELECT * FROM roles JOIN departments ON roles.department_id = departments.id',
    function(err, results, fields) {
        console.table(results);
    }
);