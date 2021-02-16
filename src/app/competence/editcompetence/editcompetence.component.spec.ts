import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompetenceComponent } from './editcompetence.component';

describe('EditcompetenceComponent', () => {
  let component: EditcompetenceComponent;
  let fixture: ComponentFixture<EditcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
