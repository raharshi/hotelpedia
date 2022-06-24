import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {

  hotel: any = null;

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {

  }

  ngOnInit(): void {
    this.hotelService.getHotelById(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      console.log(res);
      this.hotel = res;
    })
  }

}
