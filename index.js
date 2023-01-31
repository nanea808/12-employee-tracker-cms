const connection = require("./config/connection.js");

connection.query(
    'SELECT id, name FROM departments',
    function(err, results, fields) {
        console.table(results);
    }
);

connection.query(
    'SELECT roles.id, roles.title, departments.name AS departments, roles.salary FROM roles JOIN departments ON roles.department_id = departments.id',
    function(err, results, fields) {
        console.table(results);
    }
);

connection.query(
    'SELECT * FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id JOIN employees AS m ON employees.manager_id = m.id',
    function(err, results, fields) {
        console.table(results);
    }
);

connection.query(
    `SELECT T1.id, T1.first_name, T1.last_name, T1.role_id, CONCAT(T2.first_name, ' ', T2.last_name) AS manager 
    FROM employees AS T1
    LEFT JOIN employees AS T2
    ON T1.id = T2.manager_id`,
    function(err, results, fields) {
        console.table(results);
    }
);