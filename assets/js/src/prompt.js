const inquirer = require('inquirer');
// const memberData = require('./page-template');

const promptManager = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s id?',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'managerOffice'
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
        name: 'teamName'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s Github profile?',
        name: 'engineerGithub'
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
        name: 'internName'
    },
    {
        type: 'input',
        message: 'What school does your intern attend?',
        name: 'internSchool'
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