// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, ID, email, github) {
    super(name, ID, email);
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
