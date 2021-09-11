import { Component, OnInit } from '@angular/core';

import { Category } from '../models/categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'fm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

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

  ngOnInit(): void {
    this.getCategories();
  }
}
