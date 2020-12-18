import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../models/Customer/PrivateCustomer'
import {IEmailData} from '../../../models/email/emailData'
import { SimpleEmailData } from 'src/models/email/simpleEmailData';


@Injectable({
  providedIn: 'root',
})
export class EmailHandler {


  static sendEmail(emailData : IEmailData){
    window.location.href = "mailto:"+emailData.email+
    "?subject="+emailData.subject+
    "&bcc=cocoplenty31@gmail.com; cocoplenty32@gmail.com"+
    "&body="+emailData.content;
  }

  static sendBulkEmail(emailData: SimpleEmailData[]){
    var mail:string ='mailto:?bcc=sdafasdf'

    emailData.forEach(email => {
        mail+='&'
    });
  }


}
