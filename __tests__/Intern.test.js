const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const Intern = "UCLA";
  const employee = new Intern("Aice", 1, "name@fakeemail.com", Intern);
  expect(employee.school).toBe(Intern);
});

test("getRole() should return \"Intern\"", () => {
  const Intern = "Intern";
  const employee = new Intern("Aice", 1, "name@fakeemail.com", "UCLA");
  expect(employee.getRole()).toBe(Intern);
});

test("Can get school via getSchool()", () => {
  const Intern = "UCLA";
  const employee = new Intern("Aice", 1, "name@fakeemail.com", Intern);
  expect(employee.getSchool()).toBe(Intern);
});
