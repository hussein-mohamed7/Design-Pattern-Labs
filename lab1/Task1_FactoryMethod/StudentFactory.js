import OffineStudents from "./OfflineStudents.js"; 
import OnlineStudents from "./OnlineStudents.js"; 
export default class StudentFactory{
    static CreateStudent(type,name,age,level){
        if(type === "offline"){
            return new OffineStudents(name,age,level);
        }else if(type === "online"){
            return new OnlineStudents(name,age,level);
        }
    }
}