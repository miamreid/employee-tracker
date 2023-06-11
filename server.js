// const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
require("dotenv").config();
require("console.table");

// app.listen(PORT, () =>
//     console.log(`Testing connection`)
// );

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_password,
        database: process.env.DB_NAME,
    },
    console.log(`Connected to the company_db database`)
);

// const PORT = process.env.PORT || 3001;

// const app = express();
// app.use(express.urlencoded({ extended: false}));
// app.use(express.json());

const prompts = () => {
    inquirer.prompt(
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'start',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ],
    })
    .then((answer) => {
        switch (answer.start) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee':
                updateEmployee();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                console.log("App closed");
                break;
        }
    });
};

function viewEmployees() {
    connection.query(`SELECT * FROM employees`,
    function (err, results) {
        console.table(results);
            prompts();
        }
    );
}

function viewRoles() {
    connection.query(`SELECT * FROM roles`,
    function (err, results) {
        console.table(results);
        prompts();
    });
}

function viewDepartments() {
    connection.query(`SELECT * FROM departments`,
    function (err, results) {
        console.table(results);
        prompts();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the employee's first name",
            name: 'first'
        },
        {
            type: 'input',
            message: "Enter the employee's last name",
            name: 'last'
        },
        {
            type: 'input',
            message: "Enter the employee's role id",
            name: 'role'
        },
        {
            type: 'input',
            message: "Enter the employee's manager id",
            name: 'manager'
        }
    ])
    .then((answer) => {
        connection.query(
            `INSERT INTO employees (first_name, last_name, title_id, manager_id)
            VALUES ("${answer.first}", "${answer.last}", ${answer.role}, ${answer.manager})`,
            function (err, results) {
                console.log("New employee added");
                prompts();
            }
        );
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the new role title",
            name: 'title'
        },
        {
            type: 'input',
            message: "Enter the new role salary",
            name: 'salary'
        },
        {
            type: 'input',
            message: "Enter the department id",
            name: 'department'
        }
    ])
    .then((answer) => {
        connection.query(`INSERT INTO roles (title, salary, department_id)
        VALUES ("${answer.title}", ${answer.salary}, ${answer.department})`,
        function (err, results) {
            console.log("New role added");
            prompts();
        });
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the new department name',
            name: 'name'
        }
    ])
    .then((answer) => {
        connection.query(`INSERT INTO departments (department_name)
        VALUES ("${answer.name}")`,
        function (err, results) {
            console.log("New department added");
            prompts();
        });
    });
}

function updateEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter employee id',
            name: 'employee'
        },
        {
            type: 'input',
            message: 'Enter the new role id for the employee',
            name: 'role'
        }
    ])
    .then((answer) => {
        connection.query(`UPDATE employees SET role_id = '${answer.role}'
        WHERE id = ${answer.employee};`,
        function (err, results) {
            console.log("Role updated");
            prompts();
        });
    });
}

prompts();