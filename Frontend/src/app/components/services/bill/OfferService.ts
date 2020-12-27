import { Injectable } from '@angular/core';
import { IOfferData } from 'src/models/bill/offer/OfferData';

const date1 = new Date('December 17, 1995 03:24:00');
var offer: IOfferData[] =
[
  {offer:{number:1,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
  prodcuts:[
    {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
    {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
    {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
    {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
    {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
    {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},

    {offer:{number:2,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
    prodcuts:[
      {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
      {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
      {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
      {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
      {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
      {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},

      {offer:{number:3,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
      prodcuts:[
        {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
        {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
        {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
        {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
        {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
        {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},

        {offer:{number:4,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
        prodcuts:[
          {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
          {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
          {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
          {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
          {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
          {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},

          {offer:{number:5,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
          prodcuts:[
            {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
            {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
            {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
            {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
            {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
            {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},

            {offer:{number:6,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
            prodcuts:[
              {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
              {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
              {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
              {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
              {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
              {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},

              {offer:{number:7,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
              prodcuts:[
                {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
                {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
                {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
                {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
                {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
                {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},

                {offer:{number:8,date:date1,customerId:1,isCompany:true,name:'Thermenbad',plz:"4052",town:'Ansgefelden',street:'Ritzlhofstraße',bruttoValue:2750,status:'laufend',administrator:{firstname:'Michaela',lastname:'Buchberger'},stages:{offer:true,order:false,bill:true,finished:true,canceld:true}},
                prodcuts:[
                  {product:{productId:1,name:'ZC-43',description:'Wärmetauscher',price:1},amount:1},
                  {product:{productId:2,name:'ZC-44',description:'Wellrohrschlauch',price:12},amount:21},
                  {product:{productId:3,name:'ZC-45',description:'Bodenkonsole',price:1},amount:1},
                  {product:{productId:4,name:'ZC-46',description:'Haken',price:12},amount:8},
                  {product:{productId:6,name:'ZC-47',description:'Verschraubungen',price:43},amount:2},
                  {product:{productId:12,name:'ZC-48',description:'Sonstiges',price:50},amount:1},]},
]

/*
product: IRawProduct;
amount:number;
*/
@Injectable({
  providedIn: 'root',
})
export class OfferService {

  static getOffers():IOfferData[]{
    return offer;
  }

}
