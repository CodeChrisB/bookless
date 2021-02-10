import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer';
import {IEmailData} from '../../../../models/email/emailData';


@Injectable({
  providedIn: 'root',
})
export class DateFormatter {

  private static dateString = '';
  private static weekDays = ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  private static months = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  private static TimeFormatter(date: Date){
    if (date == null){
    date = new Date();
    }
    // todo rework this part this has to be done easier
    this.dateString = this.weekDays[date.getUTCDay()];
    this.dateString += date.toString().substring(7, 11);
    this.dateString += this.months[date.getUTCMonth()];
    this.dateString += date.toString().substring(15, 25);
    return this.dateString;
  }


  static getCurrentTimeAsString(): string{
    return this.TimeFormatter(null);
  }

  static getDateAsString(date: Date): string{
    let text = this.TimeFormatter(date);
    return text.substring(0, text.length - 10);
  }
}
