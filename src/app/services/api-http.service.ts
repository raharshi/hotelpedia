import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private httpClient: HttpClient, private constants: Constants) { }

  private apiServer = this.constants.API_ENDPOINT;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createHotel(hotel: any): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/hotels/', JSON.stringify(hotel), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createProfile(hotel: any): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/profiles/', JSON.stringify(hotel), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getHotel(id: any): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/hotels/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getHotels(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/hotels/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateHotel(id: any, hotel: any): Observable<any> {
    return this.httpClient.put<any>(this.apiServer + '/hotels/' + id, JSON.stringify(hotel), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteHotel(id: any) {
    return this.httpClient.delete<any>(this.apiServer + '/hotels/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getCuisines(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/cuisines/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getNeighborhoods(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/neighborhoods/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

}
