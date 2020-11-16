import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';

@Component({
  selector: 'app-contacs-show-and-editing-view',
  templateUrl: './contacs-show-and-editing-view.component.html',
  styleUrls: ['./contacs-show-and-editing-view.component.less']
})
export class ContacsShowAndEditingViewComponent implements OnInit, DoCheck {

  @Input() contact: ContactModel = new ContactModel();
  @Output() contactChange: EventEmitter<ContactModel> =   new EventEmitter();

  constructor() { }
  ngDoCheck(): void {
    this.contactChange.emit(this.contact);
  }
   
  ngOnInit(): void {
  }

  public updateValue(value: any, verga?: any): void {

    // this.contact[propertyToUpdate.toLocaleLowerCase()] = value;
  }

}
