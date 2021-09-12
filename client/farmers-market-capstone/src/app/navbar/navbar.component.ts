import { Component, OnInit } from '@angular/core';
import { BoothsService } from '../services/booths.service';

@Component({
  selector: 'fm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  booths;
  errorMessage: string;

  getBooths(): void {
    this.boothsService.getBooths().subscribe(
      (booth) => {
        this.booths = booth;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  constructor(private boothsService: BoothsService) {}

  ngOnInit(): void {
    this.getBooths();
  }
}
