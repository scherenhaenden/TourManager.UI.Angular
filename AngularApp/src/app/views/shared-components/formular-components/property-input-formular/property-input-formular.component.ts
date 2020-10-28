import { ApplicationRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-property-input-formular',
  templateUrl: './property-input-formular.component.html',
  styleUrls: ['./property-input-formular.component.less']
})
// FIxME: refactor all this class
export class PropertyInputFormularComponent implements OnInit {


  @ViewChild('propertyInput', {read: ElementRef}) propertyInput: ElementRef;

  @Input() id = '';


  @Input() propertyName = '';
  public propertyValueDirect: any;

  public _swapValue: any = '';
public _propertyValue: any = '';
get propertyValue(): any {
    return this._propertyValue;
}
@Input() set propertyValue(value: any) {
     this._propertyValue = value;
     this._swapValue = value;

}


  // @Input() propertyValue: any = '';
  @Input() type = '';
  @Output() propertyValueEmit: EventEmitter<string> =   new EventEmitter();

  constructor(private appRef: ApplicationRef) { }

  ngOnInit(): void {
  }

  public updateValue($event: any): void {

    this.propertyValueEmit.emit(this.propertyValue);
  }

  public getType(): string {

    if (this.type !== '' ) {

      if (this.type === 'string') {

        return 'text';

      }
      console.log('what am i?1', this.propertyValue);
      console.log('what am i?2', this.type);

      if (this.type === 'time') {

        try {

          console.log('_propertyValue', this._swapValue);

          const final = (this._swapValue as Date).toLocaleTimeString();

          if (this._propertyValue !== (this._swapValue as Date).toLocaleTimeString()) {

            this._propertyValue = final;

          }


        }
        catch (e) {}

        return  this.type;

      }


      console.log('my type', this.type);
      return this.type;
    }
    return 'text';
  }


    // FIXME: decouple this
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
