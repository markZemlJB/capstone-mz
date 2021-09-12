import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { BoothsService } from '../services/booths.service';
import { Category } from '../models/categories';
import { Booth } from '../models/booths';

@Component({
  selector: 'fm-view-all-booths',
  templateUrl: './view-all-booths.component.html',
  styleUrls: ['./view-all-booths.component.css'],
})
export class ViewAllBoothsComponent implements OnInit {
  categories: Category[];
  errorMessage: string;

  getCategories(): void {
    this.categoriesService.getCategory().subscribe(
      (category) => {
        this.categories = category;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }
}
