import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBoothsComponent } from './view-all-booths.component';

describe('ViewAllBoothsComponent', () => {
  let component: ViewAllBoothsComponent;
  let fixture: ComponentFixture<ViewAllBoothsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBoothsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBoothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
