export default class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    } 
    getDetails(){
        return `${this.name} teaches ${this.subject}`
    }
}