import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  public values: Array<any>;

  constructor( private http: HttpClient) {
    this.values = new Array<any>();
  }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe((value: any ) => {
    this.values = value;
    }, err => {
      console.log(err);
    });
  }

}
