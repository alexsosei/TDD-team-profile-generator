const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee("Aice", 1, "name@fakeemail.com");
  expect(employee.name).toBe("Alice");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const employee = new Employee("Aice", 1, "name@fakeemail.com");
  expect(employee.name).toBe("Alice");
});

test("Can set id via constructor argument", () => {
  const id = 100;
  const employee = new Employee("Aice", 1, "name@fakeemail.com");
  expect(employee.id).toBe(any(Number));
});

test("Can set email via constructor argument", () => {
  const email = "name@fakeemail.com";
  const employee = new Employee("Aice", 1, "name@fakeemail.com");
  expect(employee.email).toBe("name@fakeemail.com");
});

test("Can get name via getName()", () => {
  const getName = "Alice";
  const employee = new Employee("Alice");
  expect(employee.getName()).toBe("Alice");
});

test("Can get id via getId()", () => {
  const getId = 100;
  const employee = new Employee("Aice", 1, "name@fakeemail.com");
  expect(employee.getId()).toBe("Alice");
});

test("Can get email via getEmail()", () => {
  const getEmail = "name@fakeemail.com";
  const employee = new Employee("Aice", 1, "name@fakeemail.com");
  expect(employee.getEmail()).toBe("Alice");
});

test("getRole() should return \"Employee\"", () => {
  const getRole = "Employee";
  const employee = new Employee("Aice", 1, "name@fakeemail.com");
  expect(employee.getRole()).toBe("Alice");
});
