const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
// Not sure if the next 5 lines will work
const generateSite = require('./src/generate-site');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname,'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const team = []

const mainMenu = () => {
    inquirer.prompt({
        type:"list", 
        name:"task",
        message:"What type of employee would you like to create?",
        choices:["manager", "engineer", "intern", "done"]
    }).then(answers => {
        console.log(answers)
        if (answers.task === "manager") {
            askManager()
        }
        if (answers.task === "engineer") {
            askEngineer()
        }
        if (answers.task === "intern") {
            askIntern()
        }
        if (answers.task === "done") {
            buildTeam()
        }
    })
}
const askManager = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the employee name?"
        },
        {
            type:"input",
            name:"ID",
            message:"What is the employee ID?"
        },
        {
            type:"input",
            name:"email",
            message:"What is the employee email?"
        },
        {
            type:"input",
            name:"office",
            message:"What is the employee office number?"
        }
    ]).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.office)
        team.push(manager)
        mainMenu()
    })
}
const askEngineer = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the employee name?"
        },
        {
            type:"input",
            name:"ID",
            message:"What is the employee ID?"
        },
        {
            type:"input",
            name:"email",
            message:"What is the employee email?"
        },
        {
            type:"input",
            name:"gitHub",
            message:"What is the employee gitHub?"
        }
    ]).then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.gitHub)
        mainMenu()
    })
}
const askIntern = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the employee name?"
        },
        {
            type:"input",
            name:"ID",
            message:"What is the employee ID?"
        },
        {
            type:"input",
            name:"email",
            message:"What is the employee email?"
        },
        {
            type:"input",
            name:"office",
            message:"What is the employee school?"
        }
    ]).then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.ID, answers.email, answers.school)
        mainMenu()
    })
}

const buildTeam = () => {
    console.log('Your team has been built.');

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(team), "utf-8")
}

mainMenu();