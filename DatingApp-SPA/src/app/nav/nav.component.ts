import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User;

  constructor( public authService: AuthService,
               private alertifyService: AlertifyService ) {

    this.user = new User();

  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).subscribe((value) => {
      this.alertifyService.success('Succesfully logged!');
    }, err => {
      this.alertifyService.error(err);
    });
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
