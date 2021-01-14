export interface IPrivateCustomer {
    id : number;
    adress : string;
    phoneNumber : string;
    email: string;
    fName : string;
    lName : string;
    gender : string;
    customerLocation : {
      town : string;
      plz:string;
      street : string;
      country : string;
    };
}
