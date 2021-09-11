import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'fm-view-booths',
  templateUrl: './view-booths.component.html',
  styleUrls: ['./view-booths.component.css'],
})
export class ViewBoothsComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  categories;
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

  // getBoothsForCategory()
}
