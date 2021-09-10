import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoothsComponent } from './view-booths.component';

describe('ViewBoothsComponent', () => {
  let component: ViewBoothsComponent;
  let fixture: ComponentFixture<ViewBoothsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBoothsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBoothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
