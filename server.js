const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const inquirer = require('inquirer');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3001,
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database`)
);

const startApp = () => {
    inquirer.prompt({
        message: 'What would you like to do?',
        name: 'start',
        type: 'list',
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
    .then((response) => {
        switch (response.start) {
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
                connection.end();
                break;
        }
    });
};

const viewEmployees = () => {
    connection.query(
        `SELECT * FROM employee`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        }
    );
};

const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "What is the employee's first name?",
        },
        {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?",
        },
        {
            name: 'roles',
            type: 'list',
            message: "What is the employee's role?",
            choices: [
                `SELECT * FROM roles`,
            ],
        },
        {
            name: 'manager',
            type: 'list',
            message: "Who is the employee's manager?",
            choices: [
                `SELECT * FROM manager`,
            ],
        },
    ])
    .then(answer => {
        connection.query(
            `INSERT INTO employee (first_name, last_name, role_title, manager) VALUES (?, ?, ?, ?)`,
            [answer.first_name, answer.last_name, answer.roles, answer.manager],
            function (err, res) {
                if (err) throw err;
                console.log('New employee added successfully');
                startApp();
            }
        );
    });
};

const updateEmployee = () => {
    inquirer.prompt([
        {
            name: 'employee',
            type: 'list',
            message: "Which employee's role do you want to update?",
            choices: [
                `SELECT * FROM employee`,
            ],
        },
        {
            name: 'role',
            type: 'list',
            message: "Which role do you want to assign the selected employee?",
            choices: [
                `SELECT * FROM roles`,
            ],
        },
    ])
    .then(answer => {
        connection.query(
            `UPDATE employee SET role_title=? WHERE employee_id=?`,
            [answer.role, answer.employee],
            function (err, res) {
                if (err) throw err;
                console.log('Employee updated');
                startApp();
            }
        );
    });
};

const viewRoles = () => {
    connection.query(
        `SELECT * FROM roles`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        }
    );
};

const addRole = () => {
    inquirer.prompt([
        {
            name: 'role',
            type: 'input',
            message: 'What is the name of the role?',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?',
        },
        {
            name: 'department',
            type: 'list',
            message: 'Which department does the role belong to?',
            choices: [
                `SELECT * FROM departments`,
            ],
        },
    ])
    .then(answer => {
        connection.query(
            `INSERT INTO roles (title, salary, department) VALUES (?, ?, ?)`,
            [answer.title, answer.salary, answer.department],
            function (err, res) {
                if (err) throw err;
                console.log('New department added successfully');
                startApp();
            }
        );
    });
};

const viewDepartments = () => {
    connection.query(
        `SELECT * FROM departments`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        }
    );
};

const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'What is the name of the department?',
        },
    ])
    .then(answer => {
        connection.query(
            `INSERT INTO departments (department_name) VALUES (?)`,
            [answer.department],
            function (err, res) {
                if (err) throw err;
                console.log('New department added successfully');
                startApp();
            }
        );
    });
};
