import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../services/categories.service';
import { BoothsService } from '../services/booths.service';

@Component({
  selector: 'fm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  categories;
  booths;
  members;
  errorMessage: string;
  selectedCatId: string;
  selectedBoothId: number;
  selectedMemberId: number;
  displayEditBooth: boolean = false;
  displayAddBooth: boolean = false;
  boothPair;

  // TODO: Break out functionality into smaller components

  editBooth() {
    //Show the booth form and pass in the values into it
    if (this.selectedBoothId != null) {
      this.displayEditBooth = true;
    }
  }

  // addBooth() {
  //   //show the booth form
  //   if (this.displayAddBooth != null) {
  //     this.displayAddBooth = true;
  //   }
  // }

  deleteBooth(): void {
    if (this.selectedBoothId == null) {
      return;
    }
    if (window.confirm('Are you sure you want to delete this?')) {
      this.boothsService.deleteBoothById(this.selectedBoothId).subscribe((success) => console.log(success)), (error) => console.log(error);
      window.location.reload();
    }
  }

  deleteMember(): void {
    if (this.selectedMemberId == null && this.selectedBoothId == null) {
      return;
    }
    if (window.confirm('Are you sure you want to delete this?')) {
      this.boothsService.deleteBoothMemberById(this.selectedBoothId, this.selectedMemberId).subscribe((success) => console.log(success)),
        (error) => console.log(error);
      window.location.reload();
    }
  }

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

  getMembers(boothId) {
    this.boothPair = boothId;
    this.boothsService.getBoothMembersByBoothId(boothId[0]).subscribe(
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
    this.displayEditBooth = false;

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
    this.displayEditBooth = false;
  }

  constructor(private categoriesService: CategoriesService, private boothsService: BoothsService) {}

  ngOnInit(): void {
    this.getCategories();
  }
}
