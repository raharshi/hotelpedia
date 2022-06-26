import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewForm: FormGroup = new FormGroup({
    hotelId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });

  selected!: number;
  stars: number[] = [1, 2, 3, 4, 5];


  constructor(private hotelService: HotelService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ReviewComponent>,) { }

  ngOnInit(): void {
    this.reviewForm.get('hotelId')?.setValue(this.data.id);
  }

  countStar(star: any) {
    this.selected = star;
    this.reviewForm.get('rating')?.setValue(star);
    console.log('Value of star', star);
  }

  review() {
    let review = this.reviewForm.value;
    let comment = {
      'body': review.comment
    }
    review.date = formatDate(new Date().toDateString(), 'MMMM d, yyyy', 'en-US');
    review.comment = comment;
    // let hotel = { review: review };
    console.log(review);
    // this.hotelService.updateHotel(review.hotelId, hotel).subscribe((res) => {
    //   console.log(res);
    // })
    this.dialogRef.close(review);
  }
}
