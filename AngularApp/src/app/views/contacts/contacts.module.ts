import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [ContactsComponent, SummaryComponent],
  imports: [
    CommonModule,
    CommonModule,
    NgbModule,
    SharedComponentsModule,
    FormsModule
  ],
  providers: [ContactService],
})
export class ContactsModule { }
