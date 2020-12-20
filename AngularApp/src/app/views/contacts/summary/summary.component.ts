import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from 'src/app/models/contact-model';
import { TelephoneNumberModel } from 'src/app/models/telephone-number-model';
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


  public async getIdOfVenueInUrl(): Promise<void> {

    this.activatedRoute.queryParams.subscribe(params => {

      this.currentEntityID = this.activatedRoute.snapshot.params.id;

      if (this.currentEntityID !== undefined) {

        this.loadValues(this.currentEntityID);
        return;
      }
    });

    this.loadValues(null);
  }


  public async loadValues(id: number): Promise<void> {

    if (id !== null) {
      this.contact = await this.contactService.ShowInformationOfContactById(id);
    }
  }

  public addTelephoneNumberInput(): void {
    this.contact.telephoneNumbers.push(new TelephoneNumberModel());

  }

  public addEmailInput(): void {
    this.contact.emails.push(new EmailModel());
  }

  public addAddressInput(): void {
    this.contact.addresses.push(new AddressModel());
  }


  public updateValue(value: any, verga?: any): void {

    // this.contact[propertyToUpdate.toLocaleLowerCase()] = value;
  }

  public saveInsertedInfo(): void {

    if (this.currentEntityID === null || this.currentEntityID === undefined) {
      const resilt = this.contactService.add(this.contact);
      return;
    }

    const result = this.contactService.update(this.contact);
  }

  public deleteEmailSelected(entity: EmailModel): void {

    const result = this.contact.emails.filter(x => x.id !== entity.id);
    this.contact.emails = result;
    this.contactService.update(this.contact);
  }

  public deleteTelephoneSelected(entity: TelephoneNumberModel): void {

    const result = this.contact.telephoneNumbers.filter(x => x.id !== entity.id);
    this.contact.telephoneNumbers = result;
    this.contactService.update(this.contact);
  }

  public deleteAddressSelected(entity: AddressModel): void {

    const result = this.contact.addresses.filter(x => x.id !== entity.id);
    this.contact.addresses = result;
    this.contactService.update(this.contact);
  }
}

export class FlatModel{
  public propertyNameOfObject: string;
  public propertyValueOfObject: any;
  public propertyValueOType: string;
}

