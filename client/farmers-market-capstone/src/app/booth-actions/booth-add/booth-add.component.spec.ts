import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothAddComponent } from './booth-add.component';

describe('BoothAddComponent', () => {
  let component: BoothAddComponent;
  let fixture: ComponentFixture<BoothAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoothAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoothAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
