import { ApplicationRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TimeSpan } from 'src/app/tools/TimeSpan';

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

  @Input() type = '';
  @Output() propertyValueEmit: EventEmitter<string> =   new EventEmitter();
  @Output() propertyValueChange: EventEmitter<string> =   new EventEmitter();

  constructor(private appRef: ApplicationRef) { }

  ngOnInit(): void {
  }

  public updateValueBinding($event: any): void {
    this.propertyValueChange.emit(this._propertyValue);
  }

  public getType(): string {

    if (this.type !== '' ) {

      if (this.type === 'string') {

        return 'text';

      }

      if (this.type === 'time') {


        try{

          if (this._propertyValue !== undefined || this._propertyValue !== null) {


            if (this._propertyValue instanceof Date) {

              const myV = this._propertyValue as Date;

              this._swapValue = myV.getTime();


            }


            const my_val = (this._propertyValue as TimeSpan);

            if (my_val.hours !== 0 || my_val.minutes !== 0) {

              const my_val2 = (this._propertyValue as Date);


            }

          }


        } catch (e) {
          console.error('error time:', this._swapValue);
          console.error('error time:', e);
        }

        try {


        }
        catch (e) {
          console.error('error time:', e);
        }

        return  this.type;

      }
      return this.type;
    }
    return 'text';
  }

}
