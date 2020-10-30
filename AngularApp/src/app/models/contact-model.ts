import {TelefonNumberModel} from './telefon-number-model';
import {AddressModel} from './address-model';
import {EmailModel} from './email-model';

export class ContactModel {
    public id = 0;
    public firstName = '';
    public lastName = '';
    public telefonNumbers : TelefonNumberModel[] = [];
    public emails: EmailModel[] = [];
    public addresses: AddressModel[] = [];
}
