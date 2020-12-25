export interface IUser {
  name:string
  rank:string
  premissions:{
    admin:boolean;
    bills:boolean;
    crm:boolean;
    dashboard:boolean;
    settings:boolean
    products:boolean;
  }
  image:string;
}
