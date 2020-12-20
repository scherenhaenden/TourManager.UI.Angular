import { Component, Input, OnInit } from '@angular/core';
import { TelephoneNumberModel } from 'src/app/models/telephone-number-model';

@Component({
  selector: 'app-telephone-numbers-view',
  templateUrl: './telephone-numbers-view.component.html',
  styleUrls: ['./telephone-numbers-view.component.less']
})
export class TelephoneNumbersViewComponent implements OnInit {

  @Input() telephoneNumbers: TelephoneNumberModel[];

  constructor() { }

  ngOnInit(): void {
  }

  public addTelephoneNumberInput(): void {
    this.telephoneNumbers.push(new TelephoneNumberModel());
  }

  public deleteTelephoneSelected(addressModel: TelephoneNumberModel): void {
    this.telephoneNumbers.splice(this.telephoneNumbers.indexOf(addressModel), 1);
  }

}
