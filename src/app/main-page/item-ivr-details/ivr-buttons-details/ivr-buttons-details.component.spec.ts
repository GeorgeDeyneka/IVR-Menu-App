import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrButtonsDetailsComponent } from './ivr-buttons-details.component';

describe('IvrButtonsDetailsComponent', () => {
  let component: IvrButtonsDetailsComponent;
  let fixture: ComponentFixture<IvrButtonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvrButtonsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvrButtonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
