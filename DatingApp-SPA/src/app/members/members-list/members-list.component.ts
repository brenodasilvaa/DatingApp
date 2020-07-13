import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  users: User[];

  constructor( private userService: UserService, private alertify: AlertifyService ) {
    this.users = new Array<User>();
   }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
      this.userService.getUsers().subscribe((users: User[]) => {
        console.log(users);
        this.users = users;
      }, err => {
        this.alertify.error(err);
      });
  }

}
