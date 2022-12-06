const Engineer = require("../lib/Engineer")

test ("Engineer test", () => {
    const engineer = new Engineer ("Joe", "a1234", "joe@yahoo.com", "joeTheSchmo")
    expect (engineer.gitHub).toBe("joeTheSchmo")
    expect (engineer.getGitHub()).toBe("joeTheSchmo")
})