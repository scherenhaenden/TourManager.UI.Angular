import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from 'src/app/models/contact-model';
import { TelefonNumberModel } from 'src/app/models/telefon-number-model';
import { EmailModel } from 'src/app/models/email-model';
import { AddressModel } from 'src/app/models/address-model';
import { ContactService } from 'src/app/services/contacts-service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {

  public currentVenewId: number = null;
  public listFlatModels: FlatModel[] = [];

  public venuewsModelEmpty: ContactModel = new ContactModel();
  public contact: ContactModel = new ContactModel();

  public currentEntityID: number;

  constructor(private contactService: ContactService
            , private activatedRoute: ActivatedRoute) { 

         

            }

  ngOnInit(): void {

    this.getIdOfVenueInUrl();

    this.loadVenue();
  }


  public async getIdOfVenueInUrl():Promise<void> {

    this.activatedRoute.queryParams.subscribe(params => {

      this.currentEntityID = this.activatedRoute.snapshot.params['id'];

      if(this.currentEntityID !== undefined) {

        this.loadValues(this.currentEntityID);
        return;
      }
    });

    this.loadValues(null);
  }



  public async loadValues(id: number): Promise<void> {

    if(id !== null) {
      this.contact = await this.contactService.ShowInformationOfContactById(id);
    }
    this.contact.telefonNumbers.push(new TelefonNumberModel());
    this.contact.emails.push(new EmailModel());
    this.contact.addresses.push(new AddressModel());

    
    this.loadVenue();
  }


  public updateValue(value: any, verga?: any): void {

    //this.contact[propertyToUpdate.toLocaleLowerCase()] = value;
  }



  public loadVenue(): void {
    this.listFlatModels = [];

    const keys = Object.keys(this.venuewsModelEmpty);
    const keysWithoutId =  keys.filter(key => key !== 'id');

    for (const i in keysWithoutId) {

      if (keysWithoutId.hasOwnProperty(i)) {
        
        // code here
        const flat = new FlatModel();
        const name = keysWithoutId[i];

        let type  = (typeof this.venuewsModelEmpty[name]).toString();

        if (type === 'object') {

          if ((this.venuewsModelEmpty[name] instanceof Date) ) {

            const value = (this.contact[name] as Date);
            const final = this.sCdateToJsDate(value);

            flat.propertyValueOfObject = final;

            type =  'time';

          }
          else  if ((Array.isArray(this.venuewsModelEmpty[name] )) ) {

            

            flat.propertyValueOfObject = this.contact[name];
            type =  'array';
          }
          else{
            flat.propertyValueOfObject = this.contact[name];

          }
        }
        else{
          flat.propertyValueOfObject = this.contact[name];
        }
        flat.propertyValueOType = type;
        const upperName = name.charAt(0).toUpperCase() + name.slice(1);
        flat.propertyNameOfObject = upperName;
        this.listFlatModels.push(flat);
      }
    }
  }

  public saveInsertedInfo(): void {

    console.log('saveme', this.contact)
    
    if(this.currentVenewId === null) {
      const resilt = this.contactService.add(this.contact);
      return;
    }

  }

  public sCdateToJsDate(cSDate: any): Date {
    // cSDate is '2017-01-24T14:14:55.807'
    // cSDate is '2020-10-16T15:27:05.8865805'
    const datestr = cSDate.toString();
    const dateAr = datestr.split('-');
    // tslint:disable-next-line:radix
    const year = parseInt(dateAr[0]);
    // tslint:disable-next-line:radix
    const month = parseInt(dateAr[1]) - 1;
    // tslint:disable-next-line:radix
    const day = parseInt(dateAr[2].substring(0, dateAr[2].indexOf('T')));
    const timestring = dateAr[2].substring(dateAr[2].indexOf('T') + 1);
    const timeAr = timestring.split(':');
    // tslint:disable-next-line:radix
    const hour = parseInt(timeAr[0]);
    // tslint:disable-next-line:radix
    const min = parseInt(timeAr[1]);
    // tslint:disable-next-line:radix
    const sek = parseInt(timeAr[2]);
    const date = new Date(year, month, day, hour, min, sek, 0);
    return date;
}

}

export class FlatModel{
  public propertyNameOfObject: string;
  public propertyValueOfObject: any;
  public propertyValueOType: string;
}

