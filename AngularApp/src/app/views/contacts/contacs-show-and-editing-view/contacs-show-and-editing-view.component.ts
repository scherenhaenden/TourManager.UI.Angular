import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';

@Component({
  selector: 'app-contacs-show-and-editing-view',
  templateUrl: './contacs-show-and-editing-view.component.html',
  styleUrls: ['./contacs-show-and-editing-view.component.less']
})
export class ContacsShowAndEditingViewComponent implements OnInit {

  


  @Input() contact: ContactModel = new ContactModel();
  @Output() contactChange: EventEmitter<ContactModel> =   new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public updateValue(value: any, verga?: any): void {

    // this.contact[propertyToUpdate.toLocaleLowerCase()] = value;
  }

}
