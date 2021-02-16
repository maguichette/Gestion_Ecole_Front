import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompetenceComponent } from './listcompetence.component';

describe('ListcompetenceComponent', () => {
  let component: ListcompetenceComponent;
  let fixture: ComponentFixture<ListcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
