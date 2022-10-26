// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email)
        this.github = github;
        this.role = role;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    getIcon() {
        return '⚙️';
    }
}

module.exports = Engineer;