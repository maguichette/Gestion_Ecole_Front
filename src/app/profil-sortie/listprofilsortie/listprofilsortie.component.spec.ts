import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprofilsortieComponent } from './listprofilsortie.component';

describe('ListprofilsortieComponent', () => {
  let component: ListprofilsortieComponent;
  let fixture: ComponentFixture<ListprofilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprofilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprofilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
