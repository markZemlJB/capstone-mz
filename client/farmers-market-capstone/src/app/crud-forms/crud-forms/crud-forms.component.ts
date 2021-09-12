import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fm-crud-forms',
  templateUrl: './crud-forms.component.html',
  styleUrls: ['./crud-forms.component.css'],
})
export class CrudFormsComponent implements OnInit {
  @Input() categoryId;
  @Input() boothId;
  @Input() memberId;

  constructor() {}

  ngOnInit(): void {}
}
