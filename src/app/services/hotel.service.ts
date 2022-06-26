import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private apiHttpService: ApiHttpService) { }

  getHotels(): Observable<any[]> {
    return this.apiHttpService.getHotels().pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };

  getHotelById(id: any): Observable<any> {
    console.log(id);
    return this.apiHttpService.getHotel(id).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  }

  getNeighborhoods(): Observable<any[]> {
    return this.apiHttpService.getNeighborhoods().pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };

  getCuisines(): Observable<any[]> {
    return this.apiHttpService.getCuisines().pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };

  createHotel(hotel: any): Observable<any[]> {
    return this.apiHttpService.createHotel(hotel).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };

  updateHotel(id: any, hotel: any): Observable<any[]> {
    return this.apiHttpService.updateHotel(id, hotel).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };

  createProfile(profile: any): Observable<any[]> {
    return this.apiHttpService.createProfile(profile).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };
}
