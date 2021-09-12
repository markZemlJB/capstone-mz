import { Component, Input, OnInit } from '@angular/core';
import { BoothsService } from '../services/booths.service';
import { Booth } from '../models/booths';

@Component({
  selector: 'fm-booth-list',
  templateUrl: './booth-list.component.html',
  styleUrls: ['./booth-list.component.css'],
})
export class BoothListComponent implements OnInit {
  @Input() categoryId: string;
  booths: Booth[];
  errorMessage: string;

  getBoothsByCategory(categoryId: string): void {
    if (categoryId === null) {
      return;
    }
    this.boothsService.getBoothsByCategory(categoryId).subscribe(
      (booth) => {
        this.booths = booth;
      },
      (error) => {
        this.errorMessage = error;
        console.log(this.errorMessage);
      }
    );
  }

  constructor(private boothsService: BoothsService) {}

  ngOnInit(): void {
    this.getBoothsByCategory(this.categoryId);
  }
}
