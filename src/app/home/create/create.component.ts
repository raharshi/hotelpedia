import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  hotelForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    neighborhood: new FormControl('', Validators.required),
    cuisine: new FormControl('', Validators.required),
    from_time: new FormControl('', Validators.required),
    to_time: new FormControl('', Validators.required),
    operating_hours: new FormControl(''),
    year_established: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]),
    img: new FormControl(''),
    reviews: new FormControl('')
  });

  neighborhoods!: any[];
  cuisines!: any[];

  constructor(private hotelService: HotelService) {

  }

  ngOnInit(): void {
    this.hotelService.getNeighborhoods().subscribe((res) => {
      this.neighborhoods = res;
      this.hotelForm.get('neighborhood')?.setValue(this.neighborhoods[0]);
    })

    this.hotelService.getCuisines().subscribe((res) => {
      this.cuisines = res;
      this.hotelForm.get('cuisine')?.setValue(this.cuisines[0]);
    })
  }

  createHotel() {
    let num = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    this.hotelForm.get('img')?.setValue('../../assets/images/hotel' + num + ".jpg");
    this.hotelForm.get('operating_hours')?.setValue(this.hotelForm.get('from_time')?.value + " - " + this.hotelForm.get('to_time')?.value)
    console.log(this.hotelForm.value);

    this.hotelService.createHotel(this.hotelForm.value).subscribe((res) => {
      console.log(res);
    })

  }

}