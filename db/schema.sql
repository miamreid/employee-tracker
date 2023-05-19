DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS manager;

CREATE TABLE employee (
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_title VARCHAR(30),
    department VARCHAR(30),
    manager VARCHAR(60),
    salary INT
);

CREATE TABLE roles (
    id INT,
    title VARCHAR(30),
    department VARCHAR(30),
    salary INT
);

CREATE TABLE manager (
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    full_name VARCHAR(30)
);

CREATE TABLE departments (
    id INT,
    department_name VARCHAR(30)
);