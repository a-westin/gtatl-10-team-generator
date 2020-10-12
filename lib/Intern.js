// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.school = school;
    this.role = "Intern";
  }
  schoolName() {
    return this.school;
  }
}

module.exports = Intern;
