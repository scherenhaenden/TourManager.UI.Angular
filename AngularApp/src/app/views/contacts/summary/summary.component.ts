import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contacts/contact-model';
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
  public venuewsModels: ContactModel = new ContactModel();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.loadVenue();
  }


  public updateValue(value: string, propertyToUpdate: string): void {

    this.venuewsModels[propertyToUpdate.toLocaleLowerCase()] = value;
  }



  public loadVenue(): void {

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

            const value = (this.venuewsModels[name] as Date);
            const final = this.sCdateToJsDate(value);

            flat.propertyValueOfObject = final;

            type =  'time';

          }
          else{
            flat.propertyValueOfObject = this.venuewsModels[name];

          }
        }
        else{
          flat.propertyValueOfObject = this.venuewsModels[name];
        }
        flat.propertyValueOType = type;
        const upperName = name.charAt(0).toUpperCase() + name.slice(1);
        flat.propertyNameOfObject = upperName;
        this.listFlatModels.push(flat);
      }
    }
  }

  public saveInsertedInfo(): void {
    
    if(this.currentVenewId === null) {
      const resilt = this.contactService.add(this.venuewsModels);
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

