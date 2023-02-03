INSERT INTO department (name)
VALUES  
("Dev-Ops"),
("Customer Service"),
("Human Resources"),
("Tech Support"),
("Sales"),
("Management");

INSERT INTO role (title, salary, department_id)
VALUES
("Dev-Ops Employee", 120000, 1),
("Customer Service Employee", 57000, 2),
("Human Resources Employee", 65000, 3),
("Tech Support Employee", 75000, 4),
("Sales Employee", 90000, 5),
("Management Employee", 160000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Alejandra", "Miret", 2, 6),
("Jonathan", "Perez", 1, 6),
("Derek", "Zoolander", 5, 6),
("Bruce", "Willis", 4, 6),
("Volodymyr", "Zelensky", 3, 6),
("Lord", "Voldemort", 6, NULL);