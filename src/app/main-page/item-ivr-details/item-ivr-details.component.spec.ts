import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIvrDetailsComponent } from './item-ivr-details.component';

describe('ItemIvrDetailsComponent', () => {
  let component: ItemIvrDetailsComponent;
  let fixture: ComponentFixture<ItemIvrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIvrDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemIvrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
