const Intern = require("../lib/Intern")

test ("Intern test", () => {
    const intern = new Intern ("Joe", "a1234", "joe@yahoo.com", "The School for Kids Who Need to Read Good and Stuff")
    expect (intern.school).toBe("The School for Kids Who Need to Read Good and Stuff")
    expect (intern.getSchool()).toBe("The School for Kids Who Need to Read Good and Stuff")
})