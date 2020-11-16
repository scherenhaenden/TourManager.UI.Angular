import { Route } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Version } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenuesModels } from '../../../models/venues-model';
import { VenuesService } from './../../../services/venues-service';
import { CSharpDateToJsDate } from 'src/app/tools/csharp-date-to-js-date';

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

  //FIXME: this might be not needed anylonger
  public formatTime(date: any): string {
    //FIXME: use this as service or static?
    /*const myNewDate =  new CSharpDateToJsDate().sCdateToJsDate(date);
    return myNewDate.toLocaleTimeString();*/
    return date;

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
}
