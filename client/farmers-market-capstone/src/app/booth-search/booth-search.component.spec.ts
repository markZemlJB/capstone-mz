import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothSearchComponent } from './booth-search.component';

describe('BoothSearchComponent', () => {
  let component: BoothSearchComponent;
  let fixture: ComponentFixture<BoothSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoothSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoothSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
