import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BoothsService } from '../services/booths.service';

@Component({
  selector: 'fm-member-display',
  templateUrl: './member-display.component.html',
  styleUrls: ['./member-display.component.css'],
})
export class MemberDisplayComponent implements OnInit, OnChanges {
  @Input() selectedMemberId = null;
  @Input() selectedBoothId = null;
  member;

  getMember() {
    this.boothsService.getBoothMemberById(this.selectedBoothId, this.selectedMemberId).subscribe(
      (member) => {
        this.member = member;
      },
      (error) => console.log(error)
    );
  }

  constructor(private boothsService: BoothsService) {}

  ngOnInit(): void {
    this.getMember();
  }

  ngOnChanges(): void {
    this.getMember();
  }
}
