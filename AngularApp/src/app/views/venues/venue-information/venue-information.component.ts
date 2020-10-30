import { Time } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenuesModels } from 'src/app/models/venues-model';
import { VenuesService } from 'src/app/services/venues-service';

@Component({
  selector: 'app-venue-information',
  templateUrl: './venue-information.component.html',
  styleUrls: ['./venue-information.component.less']
})
export class VenueInformationComponent implements OnInit {

  public venuewsModels: VenuesModels = new VenuesModels();
  public venuewsModelEmpty: VenuesModels = new VenuesModels();

  public listFlatModels: FlatModel[] = [];

  public currentEntityID: number = null;

  constructor(private venuesService: VenuesService
            , private activatedRoute: ActivatedRoute
            , private router: Router) {

  }

  ngOnInit(): void {
    this.getIdOfVenueInUrl();
    //this.loadInformation();
  }

  public async getIdOfVenueInUrl():Promise<void> {

    this.activatedRoute.queryParams.subscribe(params => {

      this.currentEntityID = this.activatedRoute.snapshot.params['id'];

      if(this.currentEntityID !== undefined) {

        this.loadInformation(this.currentEntityID);

      }

      this.loadVenue();


      
    }) ;

  }

  public async loadInformation(id: number): Promise<void> {

    this.activatedRoute.queryParams.subscribe(params => {

      this.currentEntityID = this.activatedRoute.snapshot.params['id'];

      const myValues =  this.venuesService.getVenueInformation<VenuesModels>(this.currentEntityID);

      (async () => { //no async keyword here
        try {
          const result = await myValues;

          this.listFlatModels = [];

          this.venuewsModels = result;

          console.log('this.venuewsModels', this.venuewsModels);

          this.loadVenue();

          console.log('async/await -> ', result);
        } catch (err) {
          console.log(err);
        }
      })();
      console.log('myvalues', myValues);
    });   

  }

  public loadVenue(): void {

    const keys = Object.keys(this.venuewsModelEmpty);
    const keysWithoutId =  keys.filter(key => key !== 'id');

    console.log('flatt up', (this.venuewsModels))
    console.log('flatt keys', (keys))
    console.log('flatt keysWithoutId', (keysWithoutId))
    //console.log('flatt object', (type))
    console.log('flatt name', (name))

    for (const i in keysWithoutId) {

      if (keysWithoutId.hasOwnProperty(i)) {
        // code here
        const flat = new FlatModel();
        const name = keysWithoutId[i];

        let type  = (typeof this.venuewsModelEmpty[name]).toString();
        if (type === 'object') {

          if ((this.venuewsModelEmpty[name] instanceof Date) ) {

            const value = (this.venuewsModels[name] as Date);

            console.log('value time', value);

            let final: Date = new Date();

            try{
              final = this.sCdateToJsDate(value);
            }
            catch(e){
              final = (value);
            }

            flat.propertyValueOfObject = final;

            type =  'time';


          }
          else{
            flat.propertyValueOfObject = this.venuewsModels[name];

          }

        }
        else{
          flat.propertyValueOfObject = this.venuewsModels[name];
        }
        flat.propertyValueOType = type;
        const upperName = name.charAt(0).toUpperCase() + name.slice(1);
        // name = name.charAt(0).toUpperCase() + name.slice(1);
        flat.propertyNameOfObject = upperName;
        console.log('myreal value', name);
        console.log('myreal value', this.venuewsModels[name]);


        this.listFlatModels.push(flat);

        console.log('myreal value flat', this.listFlatModels);
      }
    }
  }

  public updateValue(value: string, propertyToUpdate: string): void {

    this.venuewsModels[propertyToUpdate.toLocaleLowerCase()] = value;
  }

  public async saveInsertedInfo(): Promise<void>{

    if (this.currentEntityID === null) {
      const resilt = this.venuesService.addNewVenue(this.venuewsModels);
      return;
    }

    const resilt = this.venuesService.updateVenue(this.venuewsModels);

  }

  public deleteVenue(): void {

    if (this.currentEntityID !== null) {
      this.venuesService.deleteVenue(this.currentEntityID);
      this.router.navigate(['./venues/']);
    }
  }


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

export class FlatModel{
  public propertyNameOfObject: string;
  public propertyValueOfObject: any;
  public propertyValueOType: string;
}
