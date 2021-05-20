export class TotalCustomerService {

    static getTotalCustomerAmount(): number{
      return 147;
    }

    // a customer is a new customer if he's in the system for less than a month
    static getNewCustomerAmount(): number{
      return 7;
    }
}
