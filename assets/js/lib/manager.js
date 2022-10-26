// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
        
    }

    getRole() {
        return 'Manager';
    }

    getIcon() {
        return '☕';
    }
}

module.exports = Manager;