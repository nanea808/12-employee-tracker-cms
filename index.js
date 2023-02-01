const selectQuery = require("./helpers/sql_queries");
const inquirer = require("inquirer");

const recursiveList = [
    {
        type: "list",
        name: "queryList",
        message: "What would you like to do?",
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            new inquirer.Separator(),
            'exit'
        ]
    }
];

const ask = () => {
    inquirer.prompt(recursiveList).then((answers) => {
        if (answers.queryList === 'exit') {
            //exit
            process.exit();
        } else {
            selectQuery(answers.queryList);
            ask();
        }
    });
}

ask();