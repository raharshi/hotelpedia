import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private http: HttpClient) { }

  public get = (url: string, options?: any): Observable<any> =>
    this.http.get(url, options);

  public post(url: string, data: any, options?: any): Observable<any> {
    data = this.jsonToFormData(data);
    return this.http.post(url, data, options);
  }

  public put = (url: string, data: any, options?: any): Observable<any> =>
    this.http.put(url, data, options);

  public delete(url: string, options?: any): Observable<any> {
    const opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: new HttpParams({ fromObject: options }),
    }
    return this.http.delete(url, opt);
  }

  public jsonToFormData(item: any): FormData {
    let formData = new FormData();
    for (const key in item) {
      if (key == 'images[]' || key == 'banners[]') {
        for (const file in item[key]) {
          formData.append(key, item[key][file]);
        }
      } else formData.append(key, item[key] ?? '');
    }
    return formData;
  }
}
