import { Component, OnInit } from '@angular/core';

import { BoothsService } from '../../services/booths.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css'],
})
export class MemberAddComponent implements OnInit {
  addMemberForm: FormGroup;
  booths;
  selectedBoothId: number;
  displayGroupError: boolean = false;

  constructor(private boothsService: BoothsService, private fb: FormBuilder, private router: Router) {
    this.addMemberForm = fb.group({
      MemberName: [null, Validators.required],
      // TODO: Implement phone validator
      MemberPhone: [null, Validators.required],
      MemberEmail: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit(formValues) {
    this.boothsService.addNewMemberToBooth(this.selectedBoothId, formValues).subscribe(
      (success) => {
        this.displayGroupError = false;
        alert('Member added!');
        this.router.navigate(['/admin']);
      },
      (error) => {
        if (error.error == 'Member not added - group at capacity') {
          this.displayGroupError = true;
        }
      }
    );
  }

  setSelectedBoothId(selectedBoothId: number): void {
    this.selectedBoothId = selectedBoothId;
  }

  getBooths(): void {
    this.boothsService.getBooths().subscribe(
      (booths) => {
        this.booths = booths;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getBooths();
  }
}
