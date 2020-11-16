import { ContactModel } from './contact-model';
import { VenuesModels } from './venues-model';

export class VenuesToContactsModel {

    public venueId: number;

    public contactId: number;

    public venue: VenuesModels;

    public contact: ContactModel;
}
