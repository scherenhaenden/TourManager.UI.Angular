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

          if(this._propertyValue !== undefined || this._propertyValue !== null) {

            

            if(this._propertyValue instanceof Date) {

              let myV = this._propertyValue as Date;

              this._swapValue = myV.getTime();
              


            }
            
            console.log('am i date?', this._swapValue instanceof Date);
            console.log('am i value?', this._swapValue);
            
            
            let my_val= (this._propertyValue as TimeSpan);

            if(my_val.hours !==0 || my_val.minutes !== 0) {

              let my_val2= (this._propertyValue as Date);


              console.log('_propertyValue', this._propertyValue);
              console.log('_propertyValue ho' , my_val);
              console.log('_propertyValue hours' , my_val.hours);
              console.log('_propertyValue seconds' , my_val.hours);

              /*console.log('my_val fixed', my_val);
              console.log('my_val date', my_val2.getTime());
              console.log('totalHours fixed', my_val.totalHours);*/

            }


            
          

          //console.log('_propertyValue fixed', this._propertyValue);

          


          //console.log('my_val fixed', my_val);


          //this._swapValue = my_val.getTime();
          

          //console.log('my_val fixed gettime', my_val.getTime().toString());
          
          //this._propertyValue = this._swapValue;

          //console.log('my_val fixed', my_val.toTimeString());

          //this._propertyValue = this.sCdateToJsDate(this._swapValue);


          //this._swapValue = this.sCdateToJsDate(my_val);




          }

          
        } catch (e) {
          console.error('error time:', this._swapValue);
          console.error('error time:', e);
        }

        try {


         
          //console.log('_propertyValue fixed', this._swapValue);




  //        this._propertyValue = this._swapValue;
//
          /*const final = (this._swapValue as Date).toLocaleTimeString();

          if (this._propertyValue !== (this._swapValue as Date).toLocaleTimeString()) {

            this._propertyValue = final;

          }*/


        }
        catch (e) {
          console.error('error time:', e)
        }

        return  this.type;

      }
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
