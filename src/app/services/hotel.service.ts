import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiEndpointsService } from './api-endpoints.service';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService) { }

  getHotels(): Observable<any[]> {
    return this.apiHttpService.get(this.apiEndpointsService.getHotels()).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };

  getHotelById(id: any): Observable<any> {
    console.log(id);
    return this.apiHttpService.get(this.apiEndpointsService.getHotelById(id)).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  }

  getNeighborhoods(): Observable<any[]> {
    return this.apiHttpService.get(this.apiEndpointsService.getNeighborhoods()).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };

  getCuisines(): Observable<any[]> {
    return this.apiHttpService.get(this.apiEndpointsService.getCuisines()).pipe(map((res: any) => {
      if (res) {
        return res;
      }
      else return null;
    }))
  };
}
