import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): Observable<{ id: number; name: string; emailid: string }> {
    return of({ id: 1, name: 'suma', emailid: 'suma@gmail.com' });
  }

  constructor() { }
}
