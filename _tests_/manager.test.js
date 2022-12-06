const Manager = require("../lib/Manager")

test ("Manager test", () => {
    const manager = new Manager ("Joe", "a1234", "joe@yahoo.com", 6666)
    expect (manager.officeNum).toBe(6666)
    expect (manager.getOfficeNum()).toBe(6666)
})