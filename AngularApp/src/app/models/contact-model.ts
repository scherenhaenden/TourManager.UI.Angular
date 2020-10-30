import {TelefonNumberModel} from './telefon-number-model';
import {AddressModel} from './address-model';
import {Email} from './email';

export class ContactModel {
    public id = 0;
    public firstName = '';
    public lastName = '';
    public telefonNumbers : TelefonNumberModel[] = [];
    public emails: Email[] = [];
    public addresses: AddressModel[] = [];
}
