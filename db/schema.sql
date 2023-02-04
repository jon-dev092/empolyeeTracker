DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

-- Create the department table
CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL
);

-- Create the role table
CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
salary DECIMAL(10, 2) NOT NULL,
department_id INT,
FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE SET NULL
);

-- Create the employee table
CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
role_id INT,
manager_id INT,
FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE SET NULL
);