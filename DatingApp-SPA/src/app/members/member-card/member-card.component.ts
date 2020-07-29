import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute} from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() user: User;
  @ViewChild('memberTabs', {static: true}) memberTabs: TabsetComponent;

  constructor( private authService: AuthService,
               private userService: UserService,
               private alertify: AlertifyService,
               private routes: ActivatedRoute) {}

  ngOnInit() {}

  sendLike(recipientId: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, recipientId).subscribe((date) => {
      this.alertify.success('Liked ' + this.user.knownAs);
    }, err => {
      this.alertify.error(err);
    });
  }
}
