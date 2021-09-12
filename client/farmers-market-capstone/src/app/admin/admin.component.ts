import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoriesService } from '../services/categories.service';
import { BoothsService } from '../services/booths.service';
import { Category } from '../models/categories';
import { Booth } from '../models/booths';

@Component({
  selector: 'fm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  categories;
  booths;
  errorMessage: string;
  members;
  selectedCatId;
  selectedBoothId;
  selectedMemberId;

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

  getMembers(boothId: number) {
    this.boothsService.getBoothMembersByBoothId(boothId).subscribe(
      (members) => {
        this.members = members;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  categorySelection(category) {
    this.selectedCatId = category;

    //Clears data in case the user changes their mind and chooses another dropdown option
    this.selectedBoothId = null;
    this.selectedMemberId = null;
    this.booths = null;
    this.members = null;

    this.getBoothsByCategory(this.selectedCatId);
  }

  boothSelection(boothId) {
    this.selectedBoothId = boothId;

    this.selectedMemberId = null;
    this.members = null;

    this.getMembers(boothId);
  }

  memberSelection(memberId) {
    this.selectedMemberId = memberId;
  }

  constructor(private categoriesService: CategoriesService, private boothsService: BoothsService) {}

  ngOnInit(): void {
    this.getCategories();
  }
}
