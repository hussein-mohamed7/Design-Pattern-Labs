import TeacherDecorator from "./TeacherDecorator.js";
export default class SalaryDecorator extends TeacherDecorator{
    constructor(teacher , salary){
        super(teacher);
        this.salary = salary;
    }
    getDetails(){
        return `${super.getDetails()} and salary is ${this.salary}`;
    }
}