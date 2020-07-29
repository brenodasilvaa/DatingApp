import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Message } from '../models/Message';
import { Pagination } from '../models/pagination';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  pagination: Pagination;
  messages: Message[];
  private pageNumber: number;
  private pageSize: number;
  messageContainer: string;

  constructor( private userService: UserService,
               private authService: AuthService,
               private alertify: AlertifyService) {
    this.pageNumber = 1;
    this.pageSize = 5;
    this.messageContainer = 'Unread';
   }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(container?: string) {
    if (container) {
      this.messageContainer = container;
    }
    this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer)
      .subscribe((message) => {
        this.messages = message.results;
        this.pagination = message.pagination;
        this.alertify.success('Messages loaded');
      }, err => {
        this.alertify.error('Error Loading Messages');
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.getMessages();
  }

  deleteMessage(id: number) {
    this.userService.deleteMessage(this.authService.decodedToken.nameid, id).subscribe( res => {
      this.alertify.success('Message successfully deleted!')
    }, err => {
      this.alertify.error(err)
    });
  }

}
