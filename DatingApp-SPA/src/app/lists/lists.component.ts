import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { PaginatedResult, Pagination } from '../models/pagination';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  users: User[];
  user: User = JSON.parse(localStorage.getItem('user'));
  userParams: any = {};
  likesParams: {};
  pagination: Pagination;

  constructor( private userService: UserService, private alertify: AlertifyService ) {
    this.users = new Array<User>();
    this.pagination = new Pagination();
    this.userParams = null;
   }

  ngOnInit() {
    this.pagination.currentPage = 1;
    this.pagination.itemsPerPage = 5;
    this.likesParams = 'Likers';
    this.loadUsers();
  }

  loadUsers() {
      this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams, this.likesParams)
        .subscribe((users: PaginatedResult<User[]>) => {
        console.log(users);
        this.users = users.results;
        this.pagination = users.pagination;
      }, err => {
        this.alertify.error(err);
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }
}
