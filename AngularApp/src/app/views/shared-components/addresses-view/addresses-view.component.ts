import { ApplicationRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AddressModel } from 'src/app/models/address-model';

@Component({
  selector: 'app-addresses-view',
  templateUrl: './addresses-view.component.html',
  styleUrls: ['./addresses-view.component.less']
})
export class AddressesViewComponent implements OnInit {


  @Input() addresses: AddressModel[];

  constructor() { }

  ngOnInit(): void {
  }


  public addAddressInput(): void {
    this.addresses.push(new AddressModel());
  }

  public deleteAddressSelected(addressModel: AddressModel): void {
    this.addresses.splice(this.addresses.indexOf(addressModel), 1);
  }

}
