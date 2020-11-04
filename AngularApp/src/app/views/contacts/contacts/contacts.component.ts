import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contacts-service';
import { ContactModel } from '../../../models/contact-model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  public listOfEntites: ContactModel[] = [];
  public rowEntered = null;

  constructor(private contactService: ContactService
            , private router: Router) {

  }

  ngOnInit(): void {
    this.loadData();
  }


  public async loadData(): Promise<void>  {

    const value = await this.contactService.getEntites<ContactModel[]>();
    this.listOfEntites = value;

    console.log('myInfo', value);

  }

  public addNew(): void {

    this.router.navigate(['./contacts/summary/']);

  }


  public mouseEnterRow(that: object): void{

    this.rowEntered = that;
  }

  public mouseLeaveRow(that: object): void {

    if (this.rowEntered === that) {
    this.rowEntered = null;
    }
  }


  public selectVenewToEdit(item: ContactModel): void {

    console.log('item', item);
    const itemToEdit = this.listOfEntites
                  .filter(x => x.firstName === item.firstName)[0];

    const valueId = itemToEdit.id;

    this.router.navigate(['./contacts/summary/' + valueId]);


  }


}
