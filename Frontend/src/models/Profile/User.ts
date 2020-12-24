export interface IUser {
  name:string
  rank:string
  premissions:{
    admin:boolean;
    dashboard:boolean;
    crm:boolean;
    bills:boolean;
    products:boolean;
  }
  image:string;
}
