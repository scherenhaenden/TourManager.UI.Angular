import { AddressModel } from './address-model';
import { TelefonNumberModel } from './telefon-number-model';

export class VenuesModels {
    public id = 0;
    public name = '';
    public addresses: AddressModel[] = [];
    public telefonNumbers: TelefonNumberModel[];
    public VenuesToContacts: any;
    public loadIn: Date = new Date();
    public curfView: Date = new Date();
    public MaxCapacity: number;
    public Notes = '';
}
