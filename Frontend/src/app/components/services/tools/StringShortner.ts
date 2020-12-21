import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class StringShortener {

    static Trim(string:string ,length:number):string{
      if(length<string.length){
        return string.substring(0,length-3)+'...'
      }
      else{
        //the string is short enoguh to be displayed fully
        return string;
      }
    }

}
