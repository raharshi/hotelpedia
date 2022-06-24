import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hotels!: any[];
  constructor(private hotelService: HotelService, private router: Router) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe((res) => {
      console.log(res);
      this.hotels = res;
    });
  }

  viewHotel(hotel: any) {
    this.router.navigate(['hotels/view', { id: hotel.id }])
  }
}
