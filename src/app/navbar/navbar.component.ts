import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../home/create/create.component';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild(HomeComponent, { static: true }) home!: HomeComponent;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  createHotel() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result)
        this.home.getHotels();
    });
  }

}
