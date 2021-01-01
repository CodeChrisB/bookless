import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import {IPrivateCustomer} from '../../../../../../models/Customer/PrivateCustomer'
import { EmailHandler } from 'src/app/components/services/tools/emailHandler';
import { IEmailData } from 'src/models/email/emailData';
import { UserService } from 'src/app/components/services/profile/UserService';
import { IStringId } from 'src/models/misc/IStringID';
import { IUser } from 'src/models/Profile/User';


@Component({
selector: 'customer-component',
templateUrl: './offerData.component.html',
styleUrls: ['./offerData.component.css','../../../../css/forms.css']
})
export class OfferData implements OnInit  {

  locked=false;
  consultantList : IStringId[];
  consultant : IUser =null;
  showConsultant =false;

  ngOnInit() {
    this.consultantList = UserService.getUserNameList();
    console.dir(this.consultantList)
  }

  onConsultantChange(val){
    this.consultant = UserService.getUser(val);
    this.showConsultant=true;
  }


}

