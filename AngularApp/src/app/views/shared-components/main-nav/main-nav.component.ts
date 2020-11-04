import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent implements OnInit {


  public currentState: StateButtons = StateButtons.UserInformation;
  public StateOfButtons = StateButtons;


  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          this.changeRouterNaveState(event.url);
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
      else{
        // Fixme: change this
      }
  });

  }

  ngOnInit(): void {
  }

  public initialStateButtons(): void {

  }

  public menuClicked(stateCliked: StateButtons): void {

    this.currentState = stateCliked;

  }

  public changeRouterNaveState(url: string): void {

    if (url.includes('venues')) {

      this.currentState = StateButtons.Venues;

    } else if (url.startsWith('/contacts')) {

      this.currentState = StateButtons.Contacts;

    }

  }
}

export enum StateButtons {
  UserInformation,
  Summary,
  Venues,
  Days,
  Contacts,

}
