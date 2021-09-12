import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoriesService } from '../services/categories.service';
import { BoothsService } from '../services/booths.service';
import { Category } from '../models/categories';

@Component({
  selector: 'fm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  categories;
  booths;
  errorMessage: string;
  members: string[];

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

  //TODO: Get orgId -> for each org id, grab list of groups under that ord and display as list

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
      }
    );
  }

  getMembers(members) {
    console.log(members);
  }

  categorySelection(category) {
    console.log(category);
  }

  constructor(private categoriesService: CategoriesService, private boothsService: BoothsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getBoothsByCategory(null);
  }
}
