const fs = require('fs');
const inquirer = require('inquirer');
const prompt = require('./prompt');

const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

// Imports static html for the page
const build = require('./pagebuild');
const htmlAbove = build.htmlAbove;
const htmlBelow = build.htmlBelow;

const team = [];

// Initializes the prompts for team entry.
const addManager = () => {
    inquirer.prompt(prompt.promptManager)
    .then((response) => {
        let man = new Manager(response.name, response.id, response.email, response.office);
        team.push(man);
        addMemberRole();
    }
)}

// Allows user to select which role to add
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
        let eng = new Engineer(response.name, response.id, response.email, response.github);
        team.push(eng);
        if (response.additionalTeam === 'Yes') {
            addMemberRole();
        } else {
            console.log('Thank you for inputting your team! Building page...');
            buildCards();
        }
    });
}

const addIntern = () => {
    inquirer.prompt(prompt.promptInternInfo)
    .then((response) => {
        let int = new Intern(response.name, response.id, response.email, response.school);
        team.push(int);
        if (response.additionalTeam === 'Yes') {
            addMemberRole();
        } else {
            console.log('Thank you for inputting your team! Building page...');
            buildCards();
        }
    })
}

// Builds dynamic cards based on user input for team profiles
const buildCards = () => {
    let element = '';
    team.forEach(function(teamMember) {   
        element += `
                <div class="col mb-4">
                    <div class="card">
                        <div class="card-header bg-primary text-light text-center">
                            <span class="font-weight-bold">${teamMember.name}</span> <br>
                            ${teamMember.getIcon()} ${teamMember.getRole()}
                        </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${teamMember.id}</li>
                            <li class="list-group-item">Email: <a href='mailto:${teamMember.email}'>${teamMember.email}</a></li>
                            <li class="list-group-item">${teamMember.getMoreInfo()}</li>
                        </ul>
                    </div>
                </div>`;
        });
        const htmlTeam = element;
        buildPage(htmlTeam);       
}

// Assembles the index.html page
const buildPage = (htmlTeam) => {
    const html = htmlAbove + htmlTeam + htmlBelow;
    fs.writeFile('../../../index.html', html, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
}

addManager();