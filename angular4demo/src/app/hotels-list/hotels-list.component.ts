import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent {
  public hotelsList = [];
  private hotelsUrl = 'https://api.myjson.com/bins/v4o9d';


  constructor(private http: HttpClient) {
  }

  public getHotels() {
    this.http.get(this.hotelsUrl).subscribe((hotels: any) => {
      this.hotelsList = hotels;
    })
  }
}




















