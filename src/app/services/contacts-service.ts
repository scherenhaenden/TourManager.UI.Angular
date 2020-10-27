import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contacts/contact-model';
import { VenuesModels } from '../models/venues/venues-model';
import { GenericApiService } from './generic-api-service';

@Injectable()
export class ContactService {

    constructor(private genericApiService: GenericApiService) {

    }

    public async add(venuewsModels: ContactModel): Promise<any> {

        const url = './apipublic/contacts/add/';

        this.genericApiService.GenericPost(url, venuewsModels).toPromise();
    }

    public async getEntites<T>(): Promise<T> {

        const url = './apipublic/contacts/ShowEntities/';

        return this.genericApiService.GenericGet<T>(url, null).toPromise();
    }

}
