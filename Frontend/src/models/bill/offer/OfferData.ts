import { IBillProduct } from 'src/models/Product/BillProduct';

export interface IBillData{

  offer: {
    number: number;
    date: Date;
    customerId: number;
    uid: string;
    projectName: string;
    isCompany: boolean;
    name: string;
    plz: string;
    town: string;
    street: string;
    bruttoValue: number;
    status: string;
    possibleDelivery: Date;
    consultantId: number;
    stages: {
      offer: string;
      order: string;
      bill: string;
      deliveryNote: string;
      finished: boolean;
      canceld: boolean;
    }
  };
  prodcuts: IBillProduct[];
}
