import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterBtnComponent } from './router-btn.component';

describe('RouterBtnComponent', () => {
  let component: RouterBtnComponent;
  let fixture: ComponentFixture<RouterBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
