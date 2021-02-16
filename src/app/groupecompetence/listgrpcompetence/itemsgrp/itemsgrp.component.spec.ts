import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsgrpComponent } from './itemsgrp.component';

describe('ItemsgrpComponent', () => {
  let component: ItemsgrpComponent;
  let fixture: ComponentFixture<ItemsgrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsgrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsgrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
