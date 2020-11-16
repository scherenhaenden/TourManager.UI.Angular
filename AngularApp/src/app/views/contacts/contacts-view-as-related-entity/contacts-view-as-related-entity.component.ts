import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';

@Component({
  selector: 'app-contacts-view-as-related-entity',
  templateUrl: './contacts-view-as-related-entity.component.html',
  styleUrls: ['./contacts-view-as-related-entity.component.less']
})
export class ContactsViewAsRelatedEntityComponent implements OnInit, DoCheck {

  @Input() contacts: ContactModel[] = [];
  @Output() contactsChange: EventEmitter<ContactModel[]> =   new EventEmitter();

  constructor() { }
  ngDoCheck(): void {    
    this.updateValue(this.contacts);
  }

  ngOnInit(): void {
  }

  public addEntity(): void {
    this.contacts.push(new ContactModel());
    this.updateValue(this.contacts);
  }

  public deleteEntity(item: ContactModel): void {
    this.contacts.splice(this.contacts.indexOf(item), 1);
    this.updateValue(this.contacts);
  }

  public updateValue(value: ContactModel[]): void{
    this.contacts = value;
    this.contactsChange.emit(value);
  }


}
