const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { loadavg } = require("os");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let teamArray = [];

const app = {
    init: async () => {
      await inquirer.prompt(managerQuestions).then((data) => {
        let manager = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        teamArray.push(manager);
      });
      app.promptTeamBuild();
    }},
  
    promptTeamBuild: async () => {
      await inquirer.prompt(teamBuild).then((data) => {
        switch (data.addMember) {
          case "Engineer":
            app.addEngineer();
            break;
          case "Intern":
            app.addIntern();
            break;
          case "Done":
            app.writeHtml();
        }
      });
    },
  
    addEngineer: async () => {
      await inquirer.prompt(engineerQuestions).then((data) => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArray.push(engineer);
      });
      app.promptTeamBuild();
    },
  
    addIntern: async () => {
      await inquirer.prompt(internQuestions).then((data) => {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        teamArray.push(intern);
      });
      app.promptTeamBuild();
    },
  
    writeHtml: () => {
      function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
      }
      writeToFile("./dist/team.html", generateTeam(teamArray));
      console.log(`Great! Profile Genrated`);

    };

    app.init();
