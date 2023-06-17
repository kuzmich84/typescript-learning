"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string
        //   private name: string
        this.employees = [];
        //  this.name = n
        //  this.id = id
    }
    describe() {
        console.log(`Department (${this.id}):` + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Dima');
accounting.addEmployee('Juliya');
accounting.addEmployee('Mickle');
accounting.describe();
accounting.printEmployeeInformation();
