import { Component, Input, OnInit } from '@angular/core';
import { TelefonNumberModel } from 'src/app/models/telefon-number-model';

@Component({
  selector: 'app-telefon-numbers-view',
  templateUrl: './telefon-numbers-view.component.html',
  styleUrls: ['./telefon-numbers-view.component.less']
})
export class TelefonNumbersViewComponent implements OnInit {

  @Input() telefonNumbers: TelefonNumberModel[];

  constructor() { }

  ngOnInit(): void {
  }

  public addTelefonNumberInput(): void {
    this.telefonNumbers.push(new TelefonNumberModel());
  }

  public deleteTelefonSelected(addressModel: TelefonNumberModel): void {
    this.telefonNumbers.splice(this.telefonNumbers.indexOf(addressModel), 1);
  }

}
