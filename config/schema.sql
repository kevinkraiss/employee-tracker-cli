DROP DATABASE IF EXISTS mythicQuest_db;
CREATE DATABASE mythicQuest_db;

USE mythicQuest_db;

CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(department_id)
);

CREATE TABLE roles (
    roles_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(roles_id),
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INT,
    PRIMARY KEY(employee_id),
    FOREIGN KEY (roles_id) REFERENCES roles(roles_id)
);
