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
    this.getAllBooths();
    return this.searchTerm;
  }

  getAllBooths() {
    this.boothsService.getBooths().subscribe(
      (booths) => {
        this.matchingBooths = booths.filter((group) => group.GroupName == this.searchTerm);
        // console.log(this.matchingBooths);
        if (this.matchingBooths?.length > 0) {
          this.noResults = false;
        } else {
          this.noResults = true;
        }
      },
      (error) => console.log(error)
    );
  }
  //Get the search term

  //Get all groups

  //loop through and see if search term is in list

  //if yes, display the booth and its details. Maybe include members too, if possible

  //else, display the none found message

  constructor(private boothsService: BoothsService) {}

  ngOnInit(): void {}
}
