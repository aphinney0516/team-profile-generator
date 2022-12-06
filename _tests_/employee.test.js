const Employee = require("../lib/Employee")

test ("Employee test", () => {
    const employee = new Employee ("Joe", "a1234", "joe@yahoo.com")
    expect (employee.name).toBe("Joe")
    expect (employee.id).toBe("a1234")
    expect (employee.email).toBe("joe@yahoo.com")
    expect (employee.getName()).toBe("Joe")
    expect (employee.getId()).toBe("a1234")
    expect (employee.getEmail()).toBe("joe@yahoo.com")
})