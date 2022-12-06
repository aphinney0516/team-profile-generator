class manager {
    constructor(name, id, email, officeNum){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
        getName();
        getId();
        getEmail();
        getRole(); // overridden to return "Manager"
    }
}