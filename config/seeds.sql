INSERT INTO department (name) VALUES ('Management');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Human Resources');
INSERT INTO department (name) VALUES ('Production');
INSERT INTO department (name) VALUES ('Game Tester');

INSERT INTO roles (title, salary, department_id) VALUES ('Creative Director', 300000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Monetization Director', 228790, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Engineer', 155000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Engineer', 105000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Human Resources Director', 149000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Community Manager', 87077, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Executive Producer', 175000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Head Writer', 116418, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Production Assistant', 61293, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Game Tester', 89440, 5);

INSERT INTO employee (first_name, last_name, roles_id) VALUES ('Ian', 'Grimm', 1);
INSERT INTO employee (first_name, last_name, roles_id) VALUES ('David', 'Hornsby', 7);
INSERT INTO employee (first_name, last_name, roles_id) VALUES ('Poppy', 'Li', 3);
INSERT INTO employee (first_name, last_name, roles_id) VALUES ('Brad', 'Bakshi', 2);