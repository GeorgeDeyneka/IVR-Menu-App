import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsIvrComponent } from './actions-ivr.component';

describe('ActionsIvrComponent', () => {
  let component: ActionsIvrComponent;
  let fixture: ComponentFixture<ActionsIvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsIvrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsIvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
