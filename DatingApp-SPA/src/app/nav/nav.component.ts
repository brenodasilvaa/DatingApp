import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User;

  constructor( private authService: AuthService ) {

    this.user = new User();

  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).subscribe((value) => {
      console.log('deu boa');
    }, err => {
      console.log(err);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
