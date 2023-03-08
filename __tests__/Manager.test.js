const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const Manager = 100;
  const employee = new Manager("Aice", 1, "name@fakeemail.com", Manager);
  expect(employee.officeNumber).toBe(Manager);
});

test('getRole() should return "Manager"', () => {
  const Manager = "Manager";
  const employeeOffice = new Manager("Aice", 1, "name@fakeemail.com", 100);
  expect(employeeOffice.getRole()).toBe(Manager);
});

test("Can get office number via getOffice()", () => {
  const officeNumber = 100;
  const employee = new Manager("Aice", 1, "name@fakeemail.com", officeNumber);
  expect(employee.getOfficeNumber()).toBe(any(Number));
});
