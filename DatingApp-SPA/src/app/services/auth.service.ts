import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl = 'http://localhost:5000/api/auth/';

constructor( private http: HttpClient) { }

login( user: User) {
  return this.http.post(this.baseUrl + 'login', user)
    .pipe(
      map((response: any) => {
        const userToken = response;
        if (userToken) {
          localStorage.setItem('token', userToken.token);
        }
      })
    );
}

register( user: User ) {
  return this.http.post( this.baseUrl + 'register', user );
}
}
