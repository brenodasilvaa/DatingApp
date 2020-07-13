import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

decodedToken: any;
jwtHelper = new JwtHelperService();

private baseUrl = environment.apiUrl + 'auth/';

constructor( private http: HttpClient) { }

login( user: User) {
  return this.http.post(this.baseUrl + 'login', user)
    .pipe(
      map((response: any) => {
        const userToken = response;
        if (userToken) {
          localStorage.setItem('token', userToken.token);
          this.decodedToken = this.jwtHelper.decodeToken(userToken.token);
          console.log(this.decodedToken);
        }
      })
    );
}

register( user: User ) {
  return this.http.post( this.baseUrl + 'register', user );
}

isLoggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}
}
