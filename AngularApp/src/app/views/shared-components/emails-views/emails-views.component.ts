import { Component, Input, OnInit } from '@angular/core';
import { EmailModel } from 'src/app/models/email-model';

@Component({
  selector: 'app-emails-views',
  templateUrl: './emails-views.component.html',
  styleUrls: ['./emails-views.component.less']
})
export class EmailsViewsComponent implements OnInit {

  @Input() emails: EmailModel[];

  constructor() { }

  ngOnInit(): void {
  }

  public addEmailInput(): void {
    this.emails.push(new EmailModel());
  }

  public deleteEmailSelected(addressModel: EmailModel): void {
    this.emails.splice(this.emails.indexOf(addressModel), 1);
  }

}
