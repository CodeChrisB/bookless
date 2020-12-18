import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../models/Customer/PrivateCustomer'
import {IEmailData} from '../../../models/email/emailData'


@Injectable({
  providedIn: 'root',
})
export class EmailHandler {


  static sendEmail(emailData : IEmailData){
    window.location.href = "mailto:"+emailData.email+
    "?subject="+emailData.subject+
    "&body="+emailData.content;
  }

  static sendBulkEmail(emailData: string[]){
    var mail:string ='mailto:'

    emailData.forEach(data => {
        mail+=data+",\n"
    });
    mail=mail.substring(0,mail.length-2)
    window.location.href =mail;
  }


}
