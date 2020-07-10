import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  user: User;

  constructor( private authService: AuthService ) {
    this.user = new User();
   }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe((value) => {
      console.log('registered');
    }, err => {
      console.log('didnt register');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancel');
  }

}
