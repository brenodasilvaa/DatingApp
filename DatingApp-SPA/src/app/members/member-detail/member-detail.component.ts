import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  user: User;

  constructor( private userService: UserService,
               private alertify: AlertifyService,
               private routes: ActivatedRoute) {
  this.user = new User();
                }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.loadUser();
  }

  loadUser() {
    this.userService.getSingleUser(+this.routes.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
      const imagesUrls = [];
      for (const photo of this.user.photos) {
        imagesUrls.push({
          small: photo.url,
          medium: photo.url,
          big: photo.url,
        });
      }
      this.galleryImages = imagesUrls;
    }, err => {
      this.alertify.error(err);
    });
  }

}
