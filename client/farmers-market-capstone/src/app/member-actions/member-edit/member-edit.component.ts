import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
        this.editMemberForm?.controls.MemberName.setValue(member.MemberName);
        this.editMemberForm?.controls.MemberEmail.setValue(member.MemberEmail);
        this.editMemberForm?.controls.MemberPhone.setValue(member.MemberPhone);
        this.editMemberForm?.controls.MemberId.setValue(this.selectedMemberId);
      },
      (error) => console.log(error)
    );
  }

  constructor(private boothsService: BoothsService, private fb: FormBuilder) {
    this.editMemberForm = fb.group({
      MemberId: [null],
      MemberName: [null, Validators.minLength(1)],
      // TODO: Add phone validator
      MemberPhone: [null, Validators.minLength(1)],
      MemberEmail: [null, [Validators.minLength(1), Validators.email]],
    });
  }

  onSubmit(formValues): void {
    console.log(formValues);
    this.boothsService.editMember(this.selectedBoothId, formValues).subscribe(
      (success) => {
        alert('Member edit successful!');
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.getMember();
  }
}
