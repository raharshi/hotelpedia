import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    fromTime: new FormControl('', Validators.required),
    toTime: new FormControl('', Validators.required),
    year_established: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
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

}
