import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgrpcompetenceComponent } from './listgrpcompetence.component';

describe('ListgrpcompetenceComponent', () => {
  let component: ListgrpcompetenceComponent;
  let fixture: ComponentFixture<ListgrpcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgrpcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgrpcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
