import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BoothsService } from '../../services/booths.service';

@Component({
  selector: 'fm-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  @Input() selectedMemberId: number;
  @Input() selectedBoothId: number;
  editMemberForm: FormGroup;
  member;

  getMember(): void {
    this.boothsService.getBoothMemberById(this.selectedBoothId, this.selectedMemberId).subscribe(
      (member) => {
        this.member = member;
      },
      (error) => console.log(error)
    );
  }

  constructor(private boothsService: BoothsService, private fb: FormBuilder) {
    this.editMemberForm = fb.group({
      MemberId: [null],
      MemberName: [null],
      MemberPhone: [null],
      MemberEmail: [null],
    });
  }

  onSubmit(formValues): void {
    //SET the memberId to this.selectedMemberId
    console.log(formValues);
    //this.boothsService.editMember(this.selectedBoothId, formValues).subscribe();
  }

  ngOnInit(): void {
    this.getMember();
  }
}
