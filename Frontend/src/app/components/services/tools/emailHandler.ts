import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer';
import {IEmailData} from '../../../../models/email/emailData';


@Injectable({
  providedIn: 'root',
})
export class EmailHandler {


  static sendEmail(emailData: IEmailData){
    window.location.href = 'mailto:' + emailData.email +
    '?subject=' + emailData.subject +
    '&body=' + emailData.content + this.footer(); // test1
  }

  static sendBulkEmail(emailData: string[]){
    let mail = 'mailto:';

    emailData.forEach(data => {
        mail += data + ',\n';
    });
    mail = mail.substring(0, mail.length - 2);

    mail += this.footer();
    window.location.href = mail;
  }

  private static footer(): string{
    let footer = '%0D%0A%0D%0A%0D%0A';
    let message = [
      'POWER SOLAR Wärmetauscher%0D%0A%0D%0A',
      'Inh. Dipl.-Bw. Gerald Buchberger, MBA%0D%0A%0D%0A',
      'Geschäftsleitung%0D%0A%0D%0A',
      'Ritzlhofstrasse 28',
      '4052 Ansfelden%0D%0A%0D%0A',
      'Tel.        +43 (0)7229 / 81 800%0D%0A',
      'Fax.       +43 (0)7229 / 81 800%0D%0A',
      'Mobil    +43 (0)699 / 10 22 17 91%0D%0A%0D%0A',
      'Internet:  www.Power-Solar.at%0D%0A',
      'Email :    michaela.buchberger@power-solar.at%0D%0A%0D%0A',
      'Mit freundlichen Grüßen%0D%0A%0D%0A',
      'Ihr Power Solar Team!'
    ];

    message.forEach(line => {
      footer += line;
    });


    return footer;
  }


}
