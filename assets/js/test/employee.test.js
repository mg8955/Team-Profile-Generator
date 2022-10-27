const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initilization', () => {
        it('should create an object with a "Employee" property set to an empty array when called with the "new" keyword', () => {
            const newEmployee = new Employee();

            expect(newEmployee.Employee).toEqual([]);
        }); 
    });
})