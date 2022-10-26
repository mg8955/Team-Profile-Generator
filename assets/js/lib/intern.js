// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email)
        this.school = school;
        this.role = role;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    getIcon() {
        return '📜';
    }
}

module.exports = Intern;