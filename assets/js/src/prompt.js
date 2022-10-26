const inquirer = require('inquirer');
// const memberData = require('./page-template');

const promptManager = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'office'
    }
    
];

const promptAddTeamMember = [
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern'],
        name: 'role',
    }
];

const promptEngineerInfo = [   
    {
        type: 'input',
        message: `What is your engineers\'s name?`,
        name: 'name'
    },
    {
        type: 'input',
        message: `What is your engineer\'s id?`,
        name: 'id'
    },
    {
        type: 'input',
        message: `What is your engineer\'s email?`,
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s Github profile?',
        name: 'github'
    },
    {
        type: 'list',
        message: "Would you like to add another team member?",
        choices: ['Yes', 'No'],
        name: 'additionalTeam'
    }
];

const promptInternInfo = [
    {
        type: 'input',
        message: 'What is your intern\'s name?',
        name: 'name'
    },
    {
        type: 'input',
        message: `What is your intern\'s id?`,
        name: 'id'
    },
    {
        type: 'input',
        message: `What is your engineer\'s email?`,
        name: 'email'
    },
    {
        type: 'input',
        message: 'What school does your intern attend?',
        name: 'school'
    },
    {
        type: 'list',
        message: "Would you like to add another team member?",
        choices: ['Yes', 'No'],
        name: 'additionalTeam'
    }
];    

module.exports = {
    promptManager,
    promptAddTeamMember,
    promptEngineerInfo,
    promptInternInfo
};