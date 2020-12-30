import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import {IPrivateCustomer} from '../../../../../../models/Customer/PrivateCustomer'
import { EmailHandler } from 'src/app/components/services/tools/emailHandler';
import { IEmailData } from 'src/models/email/emailData';


@Component({
selector: 'customer-component',
templateUrl: './offerData.component.html',
styleUrls: ['./offerData.component.css','../../../../css/forms.css']
})
export class OfferData implements OnInit  {

  ngOnInit() {

  }


}

