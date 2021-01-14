import { injectable } from "inversify";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";

@injectable()
export class PrivateCustomerService {
    // privateCustomerRepo = new this.privateCustomerRepository();
    public deletePrivateCustomer(id:number):IPrivateCustomer{

        //toDo: privateCustomerRepo.delete( ......
        return { id : 1, fName: "test", lName : "sdaf", gender:"g", adress:"adsfasdf", phoneNumber:"sadddsfa", email:"sdadf"};
    }
} 