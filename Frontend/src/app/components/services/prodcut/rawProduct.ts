import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { ContactPerson } from 'src/models/ContactPerson';
import { IRawProduct } from 'src/models/Product/RawProduct';
import { StringShortener } from '../tools/StringShortner';
import { IStringId } from 'src/models/misc/IStringID';

var raw :IRawProduct[] = [
  {productId:1,name:'ZC-43',description:'Wärmetauscher',price:643},
  {productId:2,name:'ZC-44',description:'Wärmetauscher',price:431},
  {productId:3,name:'ZC-45',description:'Wärmetauscher',price:771},
  {productId:4,name:'ZC-46',description:'Wärmetauscher',price:321},
  {productId:5,name:'ZC-47',description:'Wärmetauscher',price:871},
  {productId:6,name:'ZC-48',description:'Wärmetauscher',price:132},
  {productId:7,name:'ZC-49',description:'Wärmetauscher',price:341},
  {productId:8,name:'ZC-50',description:'Wärmetauscher',price:131},
  {productId:9,name:'ZC-51',description:'Wärmetauscher',price:1432},
  {productId:10,name:'ZC-52',description:'Wärmetauscher',price:1341},
  {productId:11,name:'ZC-53',description:'Wärmetauscher',price:1144},
  {productId:12,name:'ZC-54',description:'Wärmetauscher',price:1295},


]


@Injectable({
  providedIn: 'root',
})

export class RawProductService {

  static getAllProducts() :IRawProduct[]{
    return raw;
  }

  static getProduct(id:number): IRawProduct{
    return raw.filter(x=>x.productId==id)[0];
  }

  static getProductNameList():IStringId[]{
    var list : IStringId[] = []
    raw.forEach(product=>list.push({id:product.productId,string:product.name+" "+StringShortener.Trim(product.description,154)}));
    return list;
  }

  static getProductIdList():number[]{
    var list : number[] = []
    raw.forEach(product=>list.push(product.productId));
    console.dir(list)
    return list;
  }
  static getProductFullName(id:number) : String{
    var item = raw.filter(x=>x.productId==id)[0];
    if(item !=undefined)
    return item.name+" "+item.description;
    return ""
  }


  static getProductsById(ids:number[]):IRawProduct[]{
    var selectedProducts :IRawProduct[] = [];
    ids.forEach(id=>{
        selectedProducts.push(raw[id])
        console.dir(raw[id])
    })
    console.dir(selectedProducts[0])
    return selectedProducts;
  }
}
