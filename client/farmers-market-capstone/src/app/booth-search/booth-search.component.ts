import { Component, OnInit } from '@angular/core';
import { BoothsService } from '../services/booths.service';
import { Booth } from '../models/booths';

@Component({
  selector: 'fm-booth-search',
  templateUrl: './booth-search.component.html',
  styleUrls: ['./booth-search.component.css'],
})
export class BoothSearchComponent implements OnInit {
  searchTerm: string;
  matchingBooths;
  noResults: boolean = false;

  onSubmit() {
    this.findMatchingBooth();
    return this.searchTerm;
  }

  // TODO: Implement smarter search (accept lowercase names)
  findMatchingBooth() {
    this.boothsService.getBooths().subscribe(
      (booths) => {
        this.matchingBooths = booths.filter((group) => group.GroupName == this.searchTerm);
        if (this.matchingBooths?.length > 0) {
          this.noResults = false;
        } else {
          this.noResults = true;
        }
      },
      (error) => console.log(error)
    );
  }

  constructor(private boothsService: BoothsService) {}

  ngOnInit(): void {}
}
