import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject<string>('No message');
  currentMessage = this.messageSource.asObservable();

  setMessage(msg: string) {
    this.messageSource.next(msg);
  }
}