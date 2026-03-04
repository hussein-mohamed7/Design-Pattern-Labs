import TeacherDecorator from "./TeacherDecorator.js";
export default class NationalityDecorator extends TeacherDecorator{
    constructor(teacher , nationality){
        super(teacher);
        this.nationality = nationality;
    }
    getDetails(){
        return `${super.getDetails()} and nationality is ${this.nationality}`;
    }
}