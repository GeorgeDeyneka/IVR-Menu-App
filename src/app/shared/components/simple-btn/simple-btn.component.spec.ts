import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBtnComponent } from './simple-btn.component';

describe('SimpleBtnComponent', () => {
  let component: SimpleBtnComponent;
  let fixture: ComponentFixture<SimpleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
