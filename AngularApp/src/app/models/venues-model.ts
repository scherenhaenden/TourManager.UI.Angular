import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AddressModel } from './address-model';
import { EmailModel } from './email-model';
import { TelephoneNumberModel } from './telephone-number-model';
import { TimeSpan } from '../tools/TimeSpan';
import { VenuesToContactsModel } from './venues-to-contacts-model';

export class VenuesModels {
    public id = 0;
    public name = '';
    public addresses: AddressModel[] = [];
    public telephoneNumbers: TelephoneNumberModel[] = [];
    public emails: EmailModel[] = [];
    public venuesToContacts: VenuesToContactsModel[] = [];
    public loadIn: Date = new Date();
    public curfView: Date = new Date();
    public maxCapacity = 0;
    public notes = '';
}
