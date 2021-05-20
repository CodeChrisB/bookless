export interface IUser {
  id: number;
  fname: string;
  lname: string;
  phone: string;
  email: string;
  fax: string;
  rank: string;
  premissions: {
    admin: {
      read: boolean;
      write: boolean;
    }
    dashboard: {
      read: boolean;
      write: boolean;
    }
    crm: {
      read: boolean;
      write: boolean;
    }
    bills: {
      read: boolean;
      write: boolean;
    }
    products: {
      read: boolean;
      write: boolean;
    }
    settings: {
      read: boolean;
      write: boolean;
    }
  };
  globals: {
    generateEmailText: boolean;
  };
  image: string;
}
