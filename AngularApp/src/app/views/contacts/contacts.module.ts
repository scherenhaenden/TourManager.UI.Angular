import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { SummaryComponent } from './summary/summary.component';
import { ContacsMainComponent } from './contacs-main/contacs-main.component';
import { RouterModule } from '@angular/router';
import { ContacsShowAndEditingViewComponent } from './contacs-show-and-editing-view/contacs-show-and-editing-view.component';
import { ContactsViewAsRelatedEntityComponent } from './contacts-view-as-related-entity/contacts-view-as-related-entity.component';

@NgModule({
  declarations: [ContactsComponent, SummaryComponent, ContacsMainComponent
    , ContacsShowAndEditingViewComponent, ContactsViewAsRelatedEntityComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    SharedComponentsModule,
    FormsModule
  ],
  providers: [ContactService],
  exports:[ ContactsComponent, SummaryComponent, ContacsMainComponent
    , ContacsShowAndEditingViewComponent, ContactsViewAsRelatedEntityComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContactsModule { }
