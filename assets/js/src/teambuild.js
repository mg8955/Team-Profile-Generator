const fs = require('fs');
const inquirer = require('inquirer');
const prompt = require('./prompt');

const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const build = require('./pagebuild');
const htmlAbove = build.htmlAbove;
const htmlBelow = build.htmlBelow;
// console.log(typeof htmlAbove);
// console.log(typeof htmlBelow);

const team = [];

const addManager = () => {
    inquirer.prompt(prompt.promptManager)
    .then((response) => {
        let man = new Manager(response.name, response.id, response.email, response.office, 'Manager');
        team.push(man);
        // console.log(team);
        // console.log(man);
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
        //console.log(team);
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
        let int = new Intern(response.name, response.id, response.email, response. school, 'Intern');
        team.push(int);
        //console.log(team);
        if (response.additionalTeam === 'Yes') {
            addMemberRole();
        } else {
            console.log('Thank you for inputting your team! Building page...');
            buildCards();
        }
    })
}

const buildCards = () => {
    let element = '';
    team.forEach(function(teamMember) {
        
        element += `
                <div class="col mb-4">
                    <div class="card">
                        <div class="card-header">
                            ${teamMember.name} <br>
                            ${teamMember.role}
                        </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${teamMember.id}</li>
                            <li class="list-group-item">Email: ${teamMember.email}</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>`;
        });
        const htmlTeam = element;
        // console.log(htmlTeam);
        buildPage(htmlTeam);       
}

const buildPage = (htmlTeam) => {
    console.log('buildpage is being called');
    const html = htmlAbove + htmlTeam + htmlBelow;
    console.log(html);
    fs.writeFile('./testpage.html', html, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
}

addManager();

module.exports = team;