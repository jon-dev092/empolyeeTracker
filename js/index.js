// Imports
const inquirer = require('inquirer');
const connection = require('../config/connection');
require('console.table');

// Runs main menu promt and assigns functions to choices
const mainMenu = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'View all roles',
        'View all departments',
        'Add employee',
        'Add role',
        'Add department',
        'Update employee role',
        'Quit'
      ]
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all employees':
          viewEmployees();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all departments':
            viewDepartments();
            break;
          case 'Add employee':
            addEmployee();
            break;
          case 'Add role':
            addRole();
            break;
          case 'Add department':
            addDepartment();
            break;
          case 'Update employee role':
            updateEmployeeRole();
            break;
          case 'Quit':
            connection.end();
            break;
          default:
            console.log('Invalid selection.');
            mainMenu();
            break;
        }
      });
  };
  
  // Shows user the current employees 
  const viewEmployees = () => {
      connection.query('SELECT * FROM employee', (err, res) => {
          if (err) throw err;
          console.table(res);
          mainMenu();
      });
  };
  
    // Shows user the current employee roles
  const viewRoles = () => {
      connection.query('SELECT * FROM role', (err, res) => {
          if (err) throw err;
          console.table(res);
          mainMenu();
      });
  };
  
  // Shows all departments
  const viewDepartments = () => {
      connection.query('SELECT * FROM department', (err, res) => {
          if (err) throw err;
          console.table(res);
          mainMenu();
      });
  };
  
  // Adds new employee to db
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          name: 'first_name',
          type: 'input',
          message: 'What is the employee\'s first name?'
        },
        {
          name: 'last_name',
          type: 'input',
          message: 'What is the employee\'s last name?'
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'What is the employee\'s role id?'
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'What is the employee\'s manager id?'
        }
      ])
      .then((answer) => {
          connection.query('INSERT INTO employee SET ?', answer, (err) => {
              if (err) throw err;
              console.log('Employee added successfully!');
              mainMenu();
          });
      });
  };
  
  // Adds new role to db
  const addRole = () => {
    inquirer
      .prompt([
        {
          name: 'title',
          type: 'input',
          message: 'What is the title of the role?'
        },
        {
          name: 'salary',
          type: 'input',
          message: 'What is the salary for the role?'
        },
        {
          name: 'department_id',
          type: 'input',
          message: 'What is the department id for the role?'
        }
      ])
      .then((answer) => {
          connection.query('INSERT INTO role SET ?', answer, (err) => {
            if (err) throw err;
            console.log('Role added successfully!');
            mainMenu();
        });
    });
};

// Adds new department to db
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is the name of the department?'
      }
    ])
    .then((answer) => {
        connection.query('INSERT INTO department SET ?', answer, (err) => {
            if (err) throw err;
            console.log('Department added successfully!');
            mainMenu();
        });
    });
};

// Updates employee id and role id 
const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        name: 'employee_id',
        type: 'input',
        message: 'What is the id of the employee whose role you would like to update?'
      },
      {
        name: 'new_role_id',
        type: 'input',
        message: 'What is the new role id for this employee?'
      }
    ])
    .then((answer) => {
        connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [answer.new_role_id, answer.employee_id], (err) => {
            if (err) throw err;
            console.log('Employee role updated successfully!');
            mainMenu();
        });
    });
};

mainMenu();