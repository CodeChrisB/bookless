import { Injectable } from '@angular/core';
import { IBillData } from 'src/models/bill/offer/OfferData';

const date1 = new Date('December 17, 2020');
const date2 = new Date('January 12, 2021');
var Bill: IBillData[] =
[
  {offer: {number: 42069, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 12265, isCompany: true, name: 'Thermenbad', plz: '4050', town: 'Leonding', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages:  {offer: 'AN-500332', order: true, bill: true,deliveryNote:true, finished: false, canceld: false}},
  prodcuts: [
    {product: {productId: 1432, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
    {product: {productId: 4322, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
    {product: {productId: 3543, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
    {product: {productId: 5644, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
    {product: {productId: 676, name: 'Sonstiges', description: 'Verschraubungen', price: 43}, amount: 2},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40}, amount: 1},
    {product: {productId: 123, name: 'ZC-49', description: 'WT-Innen', price: 1690.50}, amount: 1},
    {product: {productId: 123, name: 'ZC-53', description: 'WT-Innen', price: 1950.41}, amount: 1},
    {product: {productId: 124, name: 'ZC-55', description: 'WT-Außen', price: 2105.43}, amount: 1},
    {product: {productId: 122, name: 'ZC-62', description: 'WT-Außen', price: 2770.45}, amount: 1},
    {product: {productId: 1322, name: 'ZC-21', description: 'WT-Außen', price: 653.30}, amount: 1},
    {product: {productId: 1232, name: 'ZC-32', description: 'WT-Verbindung', price: 725.90}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
    {product: {productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950}, amount: 1},
  ]},

    {offer: {number: 43213, date: date1, uid: '', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: false, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages:  {offer: 'AN-500332', order: true, bill: true,deliveryNote:true, finished: false, canceld: false}},
    prodcuts: [
      {product: {productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
      {product: {productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
      {product: {productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
      {product: {productId: 4, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
      {product: {productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43}, amount: 2},
      {product: {productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50}, amount: 1}, ]},

      {offer: {number: 432153, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages:  {offer: 'AN-500332', order: true, bill: true,deliveryNote:true, finished: false, canceld: false}},
      prodcuts: [
        {product: {productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
        {product: {productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
        {product: {productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
        {product: {productId: 4, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
        {product: {productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43}, amount: 2},
        {product: {productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50}, amount: 1}, ]},

        {offer: {number: 45431, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages:  {offer: 'AN-500332', order: true, bill: true,deliveryNote:true, finished: false, canceld: false}},
        prodcuts: [
          {product: {productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
          {product: {productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
          {product: {productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
          {product: {productId: 4, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
          {product: {productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43}, amount: 2},
          {product: {productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50}, amount: 1}, ]},

          {offer: {number: 654235, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages:  {offer: 'AN-500332', order: true, bill: true,deliveryNote:true, finished: false, canceld: false}},
          prodcuts: [
            {product: {productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
            {product: {productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
            {product: {productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
            {product: {productId: 4, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
            {product: {productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43}, amount: 2},
            {product: {productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50}, amount: 1}, ]},

            {offer: {number: 67642, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages:  {offer: 'AN-500332', order: true, bill: true,deliveryNote:true, finished: false, canceld: false}},
            prodcuts: [
              {product: {productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
              {product: {productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
              {product: {productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
              {product: {productId: 4, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
              {product: {productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43}, amount: 2},
              {product: {productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50}, amount: 1}, ]},

              {offer: {number: 5432217, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages:  {offer: 'AN-500332', order: true, bill: true,deliveryNote:true, finished: false, canceld: false}},
              prodcuts: [
                {product: {productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
                {product: {productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
                {product: {productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
                {product: {productId: 4, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
                {product: {productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43}, amount: 2},
                {product: {productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50}, amount: 1}, ]},

                {offer: {number: 85431763, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: {offer: 'AN-500332', order: true, bill:true,deliveryNote:true, finished: false, canceld: false}},
                prodcuts: [
                  {product: {productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1}, amount: 1},
                  {product: {productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12}, amount: 21},
                  {product: {productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1}, amount: 1},
                  {product: {productId: 4, name: 'ZC-46', description: 'Haken', price: 12}, amount: 8},
                  {product: {productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43}, amount: 2},
                  {product: {productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50}, amount: 1}, ]},
];
/*
product: IRawProduct;
amount:number;
*/
@Injectable({
  providedIn: 'root',
})
export class BillService {

  static getBills():IBillData[]{
    return Bill;
  }

  static addBill(newBill:IBillData){
    Bill.push(newBill);
  }

  static deleteBill(number:number){
    Bill = Bill.filter(o=>o.offer.number!=number)
  }

  static getBill(number:number): IBillData{
    return Bill.filter(o=>o.offer.number == number)[0]
  }

  static updateBill(updatedBill:IBillData){
    let itemIndex = Bill.findIndex(item => item.offer.number == updatedBill.offer.number);
    Bill[itemIndex] = updatedBill;
  }

}
