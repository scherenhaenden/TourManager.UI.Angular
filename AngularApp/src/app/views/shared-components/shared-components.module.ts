import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PropertyInputFormularComponent } from './formular-components/property-input-formular/property-input-formular.component';
import { FormsModule } from '@angular/forms';
import { AddressesViewComponent } from './addresses-view/addresses-view.component';
import { TelephoneNumbersViewComponent } from './telephone-numbers-view/telephone-numbers-view.component';
import { EmailsViewsComponent } from './emails-views/emails-views.component';


@NgModule({
  declarations: [MainNavComponent, PropertyInputFormularComponent, AddressesViewComponent
    , TelephoneNumbersViewComponent, EmailsViewsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    MainNavComponent, PropertyInputFormularComponent, AddressesViewComponent, TelephoneNumbersViewComponent
    , EmailsViewsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedComponentsModule { }
