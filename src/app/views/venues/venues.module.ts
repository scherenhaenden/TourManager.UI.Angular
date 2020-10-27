import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowVenuesComponent } from './show-venues/show-venues.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VenueInformationComponent } from './venue-information/venue-information.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { VenuesService } from './../../services/venues-service';


@NgModule({
  declarations: [ShowVenuesComponent, VenueInformationComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedComponentsModule,
    FormsModule
  ],
  providers: [VenuesService],
})
export class VenuesModule { }
