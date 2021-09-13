import { Component, OnInit } from '@angular/core';
import { BoothsService } from 'src/app/services/booths.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-booth-add',
  templateUrl: './booth-add.component.html',
  styleUrls: ['./booth-add.component.css'],
})
export class BoothAddComponent implements OnInit {
  addBoothForm: FormGroup;
  categories;

  constructor(
    private boothsService: BoothsService,
    private router: Router,
    private fb: FormBuilder,
    private categoriesService: CategoriesService
  ) {
    this.addBoothForm = fb.group({
      GroupName: [null, Validators.required],
      OrganizationName: [null, Validators.required],
      SponsorName: [null, Validators.required],
      // TODO: Implement phone validator
      SponsorPhone: [null, Validators.required],
      SponsorEmail: [null, [Validators.required, Validators.email]],
      MaxGroupSize: 4,
    });
  }

  onSubmit(formValues) {
    this.boothsService.addNewBooth(formValues).subscribe(
      (success) => {
        alert('Booth added!');
        this.router.navigate(['/admin']);
      },
      (error) => console.log(error)
    );
  }

  getCategories(): void {
    this.categoriesService.getCategory().subscribe(
      (category) => {
        this.categories = category;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  categorySelection(categoryName: string): void {
    this.addBoothForm?.controls.OrganizationName.setValue(categoryName);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
