import Student from "./Student.js";
export default class OffineStudents extends Student{
constructor(name,age,level){
    super(name,age);
    this.level = level;
}
getDetails(){
    return this.name + " " + this.age + " " + this.level;  
}
}