import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilsortieComponent } from './editprofilsortie.component';

describe('EditprofilsortieComponent', () => {
  let component: EditprofilsortieComponent;
  let fixture: ComponentFixture<EditprofilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
