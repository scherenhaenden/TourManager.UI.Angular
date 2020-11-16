import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';

@Component({
  selector: 'app-contacts-view-as-related-entity',
  templateUrl: './contacts-view-as-related-entity.component.html',
  styleUrls: ['./contacts-view-as-related-entity.component.less']
})
export class ContactsViewAsRelatedEntityComponent implements OnInit {



  @Input() contacts: ContactModel[] = [];
  @Output() contactsChange: EventEmitter<ContactModel[]> =   new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  public addEntity(): void {
    this.contacts.push(new ContactModel());
  }

  public deleteEntity(item: ContactModel): void {
    this.contacts.splice(this.contacts.indexOf(item), 1);
  }


}
