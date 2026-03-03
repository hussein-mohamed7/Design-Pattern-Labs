import AbstractStudentFactory from "./AbstractStudentFactory.js";
import OfflineStudents from "./OfflineStudents.js";
export default class OfflineStudentsFactory extends AbstractStudentFactory {
    createStudent(name, age, level) {
        return new OfflineStudents(name, age, level);
    }
}