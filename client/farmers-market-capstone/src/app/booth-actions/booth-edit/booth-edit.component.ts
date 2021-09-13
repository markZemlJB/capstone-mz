import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BoothsService } from '../../services/booths.service';

@Component({
  selector: 'fm-booth-edit',
  templateUrl: './booth-edit.component.html',
  styleUrls: ['./booth-edit.component.css'],
})
export class BoothEditComponent implements OnInit {
  @Input() selectedBoothId: number;
  booth = null;
  editBoothForm: FormGroup;
  //TODO Implement .setValue() for OrgName

  getBooth(): void {
    if (this.selectedBoothId == null) {
      return;
    }
    this.boothsService.getBoothById(this.selectedBoothId).subscribe(
      (booth) => (this.booth = booth),
      (error) => {
        console.log(error);
      }
    );
    console.log(JSON.stringify(this.booth));
  }

  constructor(private boothsService: BoothsService, private fb: FormBuilder) {
    this.editBoothForm = fb.group({
      GroupId: [null],
      GroupName: [null],
      OrganizationName: [null],
      SponsorName: [null],
      SponsorPhone: [null],
      SponsorEmail: [null],
      MaxGroupSize: 4,
    });
  }

  onSubmit(formValues) {
    // this.editBoothForm.value;
    console.log(formValues);
    //this.boothsService.editBoothById(formValues);
  }

  ngOnInit(): void {
    this.getBooth();
  }
}
