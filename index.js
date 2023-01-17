import inquirer from 'inquirer'
import connection from './config/connection.cjs'

const menuPrompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Hello, what would you like to do?',
            choices: ['View All Departments','View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update Employee Role', 'Exit' ]
        }
    ])

    if (answers.action === 'View All Departments') {
        viewAllDepts()
    } else if (answers.action === 'View All Roles') {
        viewAllRoles()
    } else if (answers.action === 'View All Employees') {
        viewAllEmps()
    } else if (answers.action === 'Add a Department') {
        addDept()
    } else if (answers.action === 'Add a Role') {
        addRole()
    } else if (answers.action === 'Add an Employee') {
        addEmp()
    } else if (answers.action === 'Update Employee Role') {
        updateRole()
    }
    else {
        process.exit(0)
    }
}

const menuRet = async () => {
    const answer = await inquirer.prompt(
        [
            {
                type: 'confirm',
                name: 'returnConf',
                message: 'Return to Menu?'
            }
        ])
        if (answer.returnConf === true) {
            menuPrompt()
        } else {
            process.exit(0)
        }
}

const viewAllDepts = async () => {
    connection.query(
        'SELECT * FROM department',
        function(err, results) {
            console.log(results)
            menuRet()
        })
    
}

const viewAllRoles = async () => {
    connection.query(
        'SELECT * FROM roles',
        function(err, results) {
            console.log(results)
            menuRet()
        })
}

const viewAllEmps = async () => {
    connection.query(
        'SELECT * FROM employee',
        function(err, results) {
            console.log(results)
            menuRet()
        })
}

const addDept = async () => {
    const deptName = await inquirer.prompt(
        {
            type: 'input',
            name: 'newDeptName',
            message: 'What is the name of the new department?'
        }
    )
    
    connection.query(
        `INSERT INTO department (name) VALUES ('${deptName.newDeptName}')`, 
        function() {
            console.log(`new department ${deptName.newDeptName} added!`),
            menuRet()
        }
      
    )

}

const addRole = async () => {
    const roleName = await inquirer.prompt(
   [     
        {
            type: 'input',
            name: 'newRoleName',
            message: 'What is the title of the new role?'
        },
        {
            type: 'input',
            name: 'newRoleSalary',
            message: 'What is the salary of the new role?'
        },
        {
            type: 'list',
            name: 'newRoleDept',
            message: 'What is the department of the new role?',
            choices: ['Management','Engineering', 'Human Resources', 'Production', 'Game Tester' ]
        }
    ]
    )
    
    let newRoleDeptId

    if (roleName.newRoleDept === 'Management') {
        newRoleDeptId = 1
    } else if (roleName.newRoleDept === 'Engineering') {
        newRoleDeptId = 2
    } else if (roleName.newRoleDept === 'Human Recources') {
        newRoleDeptId = 3
    } else if (roleName.newRoleDept === 'Production') {
        newRoleDeptId = 4
    } else if (roleName.newRoleDept === 'Game Tester') {
        newRoleDeptId = 5
    }

    connection.query(
        `INSERT INTO roles (title, salary, department_id) VALUES ('${roleName.newRoleName}', '${roleName.newRoleSalary}', ${newRoleDeptId})`, 
        function() {
            console.log(`new role ${roleName.newRoleName} added!`),
            menuRet()
        }
      
    )

}

const addEmp = async () => {
    const empName = await inquirer.prompt(
    [    
        {
            type: 'input',
            name: 'newEmpFirstName',
            message: 'What is the first name of the new employee?'
        }, 
        {
            type: 'input',
            name: 'newEmpLastName',
            message: 'What is the last name of the new employee?'
        }, 
        {
            type: 'input',
            name: 'newEmpRoleId',
            message: 'What is the role ID of the new employee?'
        }
    ]
    )
    
    connection.query(
        `INSERT INTO employee (first_name, last_name, roles_id) VALUES ('${empName.newEmpFirstName}', '${empName.newEmpLastName}', ${empName.newEmpRoleId})`, 
        function() {
            console.log(`new employee ${empName.newEmpFirstName}, ${empName.newEmpLastName} added!`),
            menuRet()
        }
      
    )

}
            
menuPrompt()
