import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BoothsService } from '../../services/booths.service';

@Component({
  selector: 'fm-booth-display',
  templateUrl: './booth-display.component.html',
  styleUrls: ['./booth-display.component.css'],
})
export class BoothDisplayComponent implements OnInit, OnChanges {
  @Input() selectedBoothId;
  booth;

  getBoothsById(): void {
    if (this.selectedBoothId === null) {
      return;
    }
    this.boothsService.getBoothById(this.selectedBoothId).subscribe(
      (booth) => {
        this.booth = booth;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private boothsService: BoothsService) {}

  ngOnInit(): void {
    this.getBoothsById();
  }

  ngOnChanges(): void {
    this.getBoothsById();
  }
}
