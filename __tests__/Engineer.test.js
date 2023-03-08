const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const engineer = "GitHubUser";
  const newengineer = new Engineer("Aice", 1, "name@fakeemail.com", engineer);
  expect(newengineer.github).toBe(engineer);
  console.log(engineer.github);
});

test("getRole() should return \"Engineer\"", () => {
  const engineer = "Engineer";
  const newengineer = new Engineer("Aice", 1, "name@fakeemail.com", "GitHubUser");
  expect(newengineer.getRole()).toBe(engineer);
  
});

test("Can get GitHub username via getGithub()", () => {
  const GitHubUser = "GitHubUser";
  const newengineer = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(newengineer.getGithub()).toBe(GitHubUser);
});
