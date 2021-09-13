import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothDisplayComponent } from './booth-display.component';

describe('BoothDisplayComponent', () => {
  let component: BoothDisplayComponent;
  let fixture: ComponentFixture<BoothDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoothDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoothDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
