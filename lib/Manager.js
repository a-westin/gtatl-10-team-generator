// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, ID, email, officeNum) {
    super(name, ID, email);
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.officeNum = officeNum;
    this.role = "Manager";
  }
  empOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
