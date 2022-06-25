import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hotels!: any[];

  search = new FormControl('');


  neighborhoods: any[] = [
    "White Plains",
    "Utica",
    "New York",
    "Albany",
    "New Rochelle",
    "Syracuse",
    "Rochester",
    "Buffalo",
  ]

  city = new FormControl(this.neighborhoods[0]);
  constructor(private hotelService: HotelService, private router: Router, private spinner: NgxSpinnerService, private sharedService: SharedService) {
    this.sharedService.doRefresh().subscribe((res) => {
      if (res) {
        this.getHotels();
      }
    })
  }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.spinner.show();
    this.hotelService.getHotels().subscribe((res) => {
      console.log(res);
      this.hotels = res;
      this.spinner.hide();
    });
  }

  viewHotel(hotel: any) {
    this.router.navigate(['hotels/view', { id: hotel.id }])
  }
}
