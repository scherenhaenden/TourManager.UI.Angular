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
  
  public listFlatModels: FlatModel[] = [];

  public venuewsModelEmpty: ContactModel = new ContactModel();
  public contact: ContactModel = new ContactModel();

  public currentEntityID: number;

  constructor(private contactService: ContactService
            , private activatedRoute: ActivatedRoute) { 

         

            }

  ngOnInit(): void {

    this.getIdOfVenueInUrl();
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
  }

  public addTelefonNumberInput(): void {
    this.contact.telefonNumbers.push(new TelefonNumberModel());

  }

  public addEmailInput(): void {
    this.contact.emails.push(new EmailModel());
  }

  public addAddressInput(): void {
    this.contact.addresses.push(new AddressModel());
  }


  public updateValue(value: any, verga?: any): void {

    //this.contact[propertyToUpdate.toLocaleLowerCase()] = value;
  }

  public saveInsertedInfo(): void {   

    if(this.currentEntityID === null || this.currentEntityID === undefined) {
      const resilt = this.contactService.add(this.contact);
      return;
    }

    const result = this.contactService.update(this.contact);
  }

  public deleteEmailSelected(entity: EmailModel): void {

    const result = this.contact.emails.filter(x=>x.id !== entity.id);
    this.contact.emails = result;
    this.contactService.update(this.contact);
  }

  public deleteTelefonSelected(entity: TelefonNumberModel): void {

    const result = this.contact.telefonNumbers.filter(x=>x.id !== entity.id);
    this.contact.telefonNumbers = result;
    this.contactService.update(this.contact);
  }

  public deleteAddressSelected(entity: AddressModel): void {

    const result = this.contact.addresses.filter(x=>x.id !== entity.id);
    this.contact.addresses = result;
    this.contactService.update(this.contact);
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

