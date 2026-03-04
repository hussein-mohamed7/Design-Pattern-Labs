export default class TeacherDecorator{
    constructor(teacher){
        this.teacher = teacher;
    }
    getDetails(){
        return this.teacher.getDetails();
    }
}