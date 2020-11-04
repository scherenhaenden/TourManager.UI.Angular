import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contact-model';
import { GenericApiService } from './generic-api-service';

@Injectable()
export class ContactService {

    private urlApiController = './apipublic/contacts/';

    constructor(private genericApiService: GenericApiService) {

    }

    public async add(venuewsModels: ContactModel): Promise<any> {

        const url = this.urlApiController + 'add/';

        this.genericApiService.GenericPost(url, venuewsModels).toPromise();
    }

    public async update(venuewsModels: ContactModel): Promise<any> {

        const url = this.urlApiController + 'Update/';
        this.genericApiService.GenericPut(url, venuewsModels).toPromise();
    }

    public async getEntites<T>(): Promise<T> {

        const url = this.urlApiController + 'ShowEntities/';

        return this.genericApiService.GenericGet<T>(url, null).toPromise();
    }

    public async ShowInformationOfContactById<T>(id: number): Promise<T> {

        const url = this.urlApiController + 'ShowInformationOfContactById/?id=' +  id;

        return this.genericApiService.GenericGet<T>(url, null).toPromise();
    }
}
