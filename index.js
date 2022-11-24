import inquirer from 'inquirer'

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

menuPrompt()
