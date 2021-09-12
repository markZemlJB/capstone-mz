import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormsComponent } from './crud-forms.component';

describe('CrudFormsComponent', () => {
  let component: CrudFormsComponent;
  let fixture: ComponentFixture<CrudFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
