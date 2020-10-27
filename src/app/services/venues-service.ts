import { Injectable } from '@angular/core';
import { VenuesModels } from '../models/venues/venues-model';
import { GenericApiService } from './generic-api-service';

@Injectable()
export class VenuesService {

    constructor(private genericApiService: GenericApiService) {

    }

    public async addNewVenue(venuewsModels: VenuesModels): Promise<any> {

        const url = './apipublic/venues/addvenue/';

        this.genericApiService.GenericPost(url, venuewsModels).toPromise();
    }

    public async showvenues<T>(): Promise<T> {

        const url = './apipublic/venues/showvenues/';

        return this.genericApiService.GenericPost(url, null).toPromise();
    }

    public async getVenueInformation<T>(id: number): Promise<T> {

        const url = './apipublic/venues/VenuewInformation/?id=' + id;

        return this.genericApiService.GenericGet<T>(url).toPromise();
    }

    public async deleteVenue<T>(id: number): Promise<T> {

        const url = './apipublic/venues/DeleteVenue/?id=' + id;

        return this.genericApiService.GenericGet<T>(url).toPromise();
    }

    public async updateVenue(venuewsModels: VenuesModels): Promise<any> {

        const url = './apipublic/venues/UpdateVenue/';

        this.genericApiService.GenericPost(url, venuewsModels).toPromise();
    }
}
