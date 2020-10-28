import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenuesModule } from './views/venues/venues.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from './views/shared-components/shared-components.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GenericApiService } from './services/generic-api-service';
import { ContactsModule } from './views/contacts/contacts.module';
import { StatusViewModule } from './views/status-view/status-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VenuesModule,
    NgbModule,
    SharedComponentsModule,
    RouterModule,
    HttpClientModule,
    ContactsModule,
    StatusViewModule
  ],
  providers: [GenericApiService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
