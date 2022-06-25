import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private subject = new BehaviorSubject<boolean>(true);

  refreshHotels() {
    this.subject.next(true);
  }

  doRefresh(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
