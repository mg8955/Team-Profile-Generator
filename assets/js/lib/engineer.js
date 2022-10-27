const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email)
        this.github = github;
        this.role = role;
    }

    getEmail() {
        return `Email: <a href='mailto:${this.email}'></a>`;
    }   
     
    getMoreInfo() {
        return `Github Profile: <a href='https://www.github.com/${this.github}'>${this.github}</a>`;
    }

    getRole() {
        return 'Engineer';
    }

    getIcon() {
        return '⚙️';
    }
}

module.exports = Engineer;