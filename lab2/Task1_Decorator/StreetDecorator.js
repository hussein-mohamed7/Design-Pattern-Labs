import TeacherDecorator from "./TeacherDecorator.js";
export default class StreetDecorator extends TeacherDecorator {
    constructor(teacher, street) {
        super(teacher);
        this.street = street;
    }

    getDetails() {
        return `${super.getDetails()}, Street: ${this.street}`;
    }
}