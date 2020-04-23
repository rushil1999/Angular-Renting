export class User {

    username: String;
    fname : String;
    lname: String;  
    emailaddr: String;
    phone: String;
    password: String;
    userid: number;

    constructor(username, fname, lname,emailaddr, phone, password) {
        this.userid = 1;
        this.username = username;
        this.fname = fname;
        this.lname = lname;
        this.emailaddr = emailaddr;
        this.phone = phone;
        this.password = password;

    }
}
