const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
        getSchool (){
            return this.school
        }
        getRole(){
            return 'intern'
        }; // overridden to return "Intern"
}
module.exports = Intern;