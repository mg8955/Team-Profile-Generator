// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = role;
        super(name, id, email);
    }

    getRole()
}

module.exports = Manager;
// const manager1 = new Manager(promptManager.)