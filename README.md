# Employee Tracker

## Description
The Employee Tracker lets users view all departments, employees, roles, salaries, and managers of their organization. Users can also add new employees, roles, and departments within the terminal. New data is inserted into a MySQL database which is updated and pulls in all of the information entered.

## Usage
For employers that need to keep track of their organization's employees, departments, roles, and salaries, the Employee Tracker makes it simple to access a database with all of their information. 

To use this application:

1. Clone the repo
2. Use npm install to install all required packages
3. Connect the MySQL database
4. Start the server

-- [Link to Demo](https://drive.google.com/file/d/1lGozrSo7wiHTKO1rH7MGCrzhHll5xo6u/view)
<br />
-- [View the Repo](https://github.com/miamreid/employee-tracker)

## User Story
AS A business owner<br />
I WANT to be able to view and manage the departments, roles, and employees in my company<br />
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input<br />
WHEN I start the application<br />
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br />
WHEN I choose to view all departments<br />
THEN I am presented with a formatted table showing department names and department ids<br />
WHEN I choose to view all roles<br />
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br />
WHEN I choose to view all employees<br />
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br />
WHEN I choose to add a department<br />
THEN I am prompted to enter the name of the department and that department is added to the database<br />
WHEN I choose to add a role<br />
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br />
WHEN I choose to add an employee<br />
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br />
WHEN I choose to update an employee role<br />
THEN I am prompted to select an employee to update and their new role and this information is updated in the database