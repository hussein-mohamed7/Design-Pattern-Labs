import AbstractStudentFactory from "./AbstractStudentFactory.js";
import OnlineStudents from "./OnlineStudents.js";

export default class OnlineStudentsFactory extends AbstractStudentFactory {
    createStudent(name, age, level) {
        return new OnlineStudents(name, age, level);
    }
}