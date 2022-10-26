const inquirer = require('inquirer');
const prompt = require('./prompt');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const team = [];

const addManager = () => {
    inquirer.prompt(prompt.promptManager)
    .then((response) => {
        let man = new Manager(response.name, response.id, response.email, response.office, 'Manager');
        team.push(man);
        console.log(team);
        console.log(man);
        addMemberRole();
    }
)}

const addMemberRole = () => {
    inquirer.prompt(prompt.promptAddTeamMember)
    .then((response) => {
    if (response.role === 'Engineer') {
        addEngineer();
    } else {
        addIntern();
    }
    })
}

const addEngineer = () => {
    inquirer.prompt(prompt.promptEngineerInfo)
    .then((response) => {
        let eng = new Engineer(response.name, response.id, response.email, response.github, 'Engineer');
        team.push(eng);
        console.log(team);
        if (response.additionalTeam === 'Yes') {
            addMemberRole();
        } else {
            console.log('Thank you for inputting your team! Building page...');
            return;
        }
    });
}

const addIntern = () => {
    inquirer.prompt(prompt.promptInternInfo)
    .then((response) => {
        let int = new Intern(response.name, response.id, response.email, response. school, 'Intern');
        team.push(int);
        console.log(team);
        if (response.additionalTeam === 'Yes') {
            addMemberRole();
        } else {
            console.log('Thank you for inputting your team! Building page...');
            return; 
        }
    })
}

addManager();

module.exports = team;