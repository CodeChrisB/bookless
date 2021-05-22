Create Table Customer(
    customerID serial not null primary key,
    privateCustomerID INT not null,
    priceListID INT not null,
    contactPersonID  INT not null,
    type varchar(30) not null,
    address varchar(30) not null
);

Create Table PriceListRelation(
    customerID INT not null,
    priceListID INT not null
);

Create Table PriceList(
    priceListID serial primary key,
    productID int not null,
    customerID int not null,
    price int not null
);

Create Table Product(
    productID serial not null primary key,
    priceListID int not null,
    name varchar(30) not null,
    desc varchar(30) not null
);

Create Table ContactPerson(
    contactPersonID  serial not null primary key,
    phoneNumber VARCHAR(30) not null,
    email varchar(30) not null,
    firstName varchar(30) not null,
    lastName varchar(30) not null,
    gender varchar(30) not null
);
