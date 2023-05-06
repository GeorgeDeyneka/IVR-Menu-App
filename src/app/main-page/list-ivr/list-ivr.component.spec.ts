import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIvrComponent } from './list-ivr.component';

describe('ListIvrComponent', () => {
  let component: ListIvrComponent;
  let fixture: ComponentFixture<ListIvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIvrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
