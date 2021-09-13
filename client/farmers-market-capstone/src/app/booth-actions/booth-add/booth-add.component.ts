import { Component, OnInit, Input } from '@angular/core';
import { BoothsService } from 'src/app/services/booths.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fm-booth-add',
  templateUrl: './booth-add.component.html',
  styleUrls: ['./booth-add.component.css'],
})
export class BoothAddComponent implements OnInit {
  addBoothForm: FormGroup;
  @Input() boothInfo = null;

  constructor(private boothsService: BoothsService, private fb: FormBuilder) {
    this.addBoothForm = fb.group({
      GroupName: [null],
      OrganizationName: this.boothInfo,
      SponsorName: [null],
      SponsorPhone: [null],
      SponsorEmail: [null],
      MaxGroupSize: 4,
    });
  }

  onSubmit(formValues) {
    // this.editBoothForm.value;
    console.log(formValues);
    console.log(this.boothInfo);
    //this.boothsService.editBoothById(formValues);
  }

  ngOnInit(): void {}
}
