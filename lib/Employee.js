// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.role = "Employee";
  }
  empName() {
    return this.name;
  }
  empID() {
    return this.ID;
  }
  empEmail() {
    return this.email;
  }
  empRole() {
    return this.role;
  }
}
module.exports = Employee;
