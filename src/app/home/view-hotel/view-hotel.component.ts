import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HotelService } from 'src/app/services/hotel.service';
import { SharedService } from 'src/app/services/shared.service';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {

  hotel: any = null;
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(private route: ActivatedRoute, private hotelService: HotelService,
    private spinner: NgxSpinnerService, private router: Router, private dialog: MatDialog, private sharedService: SharedService) {
    this.sharedService.doRefresh().subscribe((res) => {
      if (res) {
        this.getHotel(this.route.snapshot.paramMap.get('id'));
      }
    })
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getHotel(this.route.snapshot.paramMap.get('id'));
  }

  getHotel(id: any) {
    this.spinner.show();
    this.hotelService.getHotelById(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      console.log(res);
      this.hotel = res;
      this.spinner.hide();
    })
  }

  reviewHotel() {
    const dialogRef = this.dialog.open(ReviewComponent,
      {
        width: '25%',
        data: {
          id: this.route.snapshot.paramMap.get('id')
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        if (this.hotel.reviews.length > 0) {
          this.hotel.reviews.push(result);
        } else {
          this.hotel.reviews = [result];
        }
        this.hotelService.updateHotel(this.hotel.id, this.hotel).subscribe((res) => {
          this.getHotel(this.route.snapshot.paramMap.get('id'));
          // this.sharedService.refreshHotels();
        })

      }

    });
  }


}
