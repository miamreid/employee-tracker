INSERT INTO departments (department_name)
VALUES ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, department_id, salary)
VALUES ('Sales Lead', 1, 100000),
    ('Salesperson', 1, 80000),
    ('Lead Engineer', 2, 150000),
    ('Software Engineer', 2, 120000),
    ('Account Manager', 3, 115000),
    ('Accountant', 3, 90000),
    ('Legal Team Lead', 4, 185000),
    ('Lawyer', 4, 160000);

INSERT INTO employees (first_name, last_name, title_id, manager_id)
VALUES ('Mia', 'Reid', 1, null),
    ('Aaron', 'Stastny', 2, 1),
    ('Kylo', 'Reid', 3, null),
    ('Lauren', 'McGee', 4, 3),
    ('Domenic', 'Reid', 5, null),
    ('Ryan', 'Wyatt', 6, 5),
    ('Alex', 'Wyatt', 7, null),
    ('Oliver', 'Bierman', 8, 7);



