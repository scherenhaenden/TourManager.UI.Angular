import { Observable ,  throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map, catchError ,  retry } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';


@Injectable()
export class GenericApiService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient


) {  }

    


  public GenericGet<T>(url: string, httpOptions?: HttpHeaders): Observable<T> {

    const httpOptionsNew = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + this.authenticationService.getJWTDeCypherd(this.authenticationService.getBearer())
      }),
    };

    const urlForRequest = this.apiUrl + url;
    return this.http.get<T>(urlForRequest, httpOptionsNew)
    .pipe(
      catchError(this.handleError)
    );
  }

  public GenericPost<T>(url: string, model: T, httpOptions?: HttpHeaders, httpParams?: HttpParams): Observable<T> {

    const httpOptionsNew = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // Authorization: 'Bearer ' + this.authenticationService.getJWTDeCypherd(this.authenticationService.getBearer())
      }),
      httpParams
    };

    const urlForRequest = this.apiUrl + url;

    return this.http.post<T>(urlForRequest, model, httpOptionsNew)
    .pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse, value: any) {
    //alert(JSON.stringify(error));
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  handleErrorOld(error: any) {
    console.error('server error:', error);
    /*if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch(err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');*/
    return null;
}

}
