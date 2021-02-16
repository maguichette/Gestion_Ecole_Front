import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreferentielComponent } from './listreferentiel.component';

describe('ListreferentielComponent', () => {
  let component: ListreferentielComponent;
  let fixture: ComponentFixture<ListreferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListreferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
