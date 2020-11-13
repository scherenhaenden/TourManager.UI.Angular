import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowVenuesComponent } from './show-venues/show-venues.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VenueInformationComponent } from './venue-information/venue-information.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { VenuesService } from './../../services/venues-service';
import { ContactsModule } from '../contacts/contacts.module';


@NgModule({
  declarations: [ShowVenuesComponent, VenueInformationComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedComponentsModule,
    FormsModule,
    ContactsModule
  ],
  exports:[ContactsModule],
  providers: [VenuesService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VenuesModule { }
