import { Route } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Version } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenuesModels } from './../../../models/venues/venues-model';
import { VenuesService } from './../../../services/venues-service';

@Component({
  selector: 'app-show-venues',
  templateUrl: './show-venues.component.html',
  styleUrls: ['./show-venues.component.less']
})

export class ShowVenuesComponent implements OnInit {


  public listOFVenuewsModels: VenuesModels[] = [];
  public rowEntered = null;


  constructor(private venuesService: VenuesService
            , private router: Router
              ) {
  }

  ngOnInit(): void {
    this.loadVenues();
  }

  public mouseEnterRow(that: object): void{

    this.rowEntered = that;
  }

  public mouseLeaveRow(that: object): void {

    if (this.rowEntered === that) {
    this.rowEntered = null;
    }
  }

  public async loadVenues(): Promise<void>  {

    const value = await this.venuesService.showvenues<VenuesModels[]>();
    this.listOFVenuewsModels = value;

    console.log('myInfo', value);

  }

  public formatTime(date: any): string {
    const myNewDate = this.sCdateToJsDate(date);
    return myNewDate.toLocaleTimeString();
  }

  public addNewVenue(): void {

     this.router.navigate(['./venues/summary']);
  }

  public selectVenewToEdit(item: any): void {


    const itemToEdit = this.listOFVenuewsModels
                  .filter(x => x.name === item)[0];


    const valueId = itemToEdit.id;

    this.router.navigate(['./venues/summary/' + valueId]);
    console.log('item', item);


  }
  // FIXME: decouple this
  public sCdateToJsDate(cSDate: any): Date {
    // cSDate is '2017-01-24T14:14:55.807'
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
