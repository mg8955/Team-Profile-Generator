const inquirer = require('inquirer');
const prompt = require('./prompt');

const addManager = () => {
    inquirer.prompt(prompt.promptManager)
    .then((response) => {
        const newMan = response;
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
        const newEngin = response;
        if (newEngin.additionalTeam === 'Yes') {
            addMemberRole();
        } else {
            console.log('Thank you for inputting your team! Building page now...');
            return;
        }
    });
}

const addIntern = () => {
    inquirer.prompt(prompt.promptInternInfo)
    .then((response) => {
        const newInt = response;
        if (newInt.additionalTeam === 'Yes') {
            addMemberRole();
        } else {
            console.log('Thank you for inputting your team! Building page now...');
            return; 
        }
    })
}

addManager();