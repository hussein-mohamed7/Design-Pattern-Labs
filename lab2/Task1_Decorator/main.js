import Teacher from "./Teacher.js";
import TeacherDecorator from "./TeacherDecorator.js";
import NationalityDecorator from "./NationalityDecorator.js";
import StreetDecorator from "./StreetDecorator.js";
import SalaryDecorator from "./SalaryDecorator.js";


let teacher = new Teacher("Dr Ryhab", "Design Patterns");

let teacherDecorator = new TeacherDecorator(teacher);

teacherDecorator = new NationalityDecorator(teacherDecorator, "Egyptian");

teacherDecorator = new StreetDecorator(teacherDecorator, "Cairo");

teacherDecorator = new SalaryDecorator(teacherDecorator, 10000);

console.log(teacherDecorator.getDetails());