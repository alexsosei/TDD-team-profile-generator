// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//inherit from employee

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
      this.role = "Engineer"
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getGitHub() {
      return this.github;
    }
    getRole() {
      return "Engineer";
    }
  }
  
  module.exports = Engineer;
