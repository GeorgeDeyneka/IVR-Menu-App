import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIvrComponent } from './create-ivr.component';

describe('CreateIvrComponent', () => {
  let component: CreateIvrComponent;
  let fixture: ComponentFixture<CreateIvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIvrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
