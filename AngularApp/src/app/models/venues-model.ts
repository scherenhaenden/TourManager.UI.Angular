import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AddressModel } from './address-model';
import { EmailModel } from './email-model';
import { TelefonNumberModel } from './telefon-number-model';
import { TimeSpan } from '../tools/TimeSpan';
import { VenuesToContactsModel } from './venues-to-contacts-model';

export class VenuesModels {
    public id = 0;
    public name = '';
    public addresses: AddressModel[] = [];
    public telefonNumbers: TelefonNumberModel[] = [];
    public emails: EmailModel[] = [];
    public venuesToContacts: VenuesToContactsModel[] = [];
    public loadIn: Date = new Date();
    public curfView: Date = new Date();
    public maxCapacity: number = 0;
    public notes = '';
}