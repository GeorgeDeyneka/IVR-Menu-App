import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { CheckValidService } from 'src/app/shared/services/check-valid.service';

@Component({
  selector: 'app-create-ivr',
  templateUrl: './create-ivr.component.html',
  styleUrls: ['./create-ivr.component.scss'],
})
export class CreateIvrComponent implements OnInit {
  public ivrForm: FormGroup;
  public ivrFormSubj$: Subscription;
  private ivrData: any;
  public nextBtnDisabled: boolean = true;

  constructor(
    private fb: FormBuilder,
    private checkValidService: CheckValidService
  ) {}

  setFormActive() {
    this.ivrFormSubj$ = this.ivrForm.valueChanges
      .pipe(debounceTime(250))
      .subscribe((data) => {
        this.ivrData = data;
        this.checkValid();
      });
  }

  checkValid() {
    this.nextBtnDisabled = !this.checkValidService.checkValid(
      this.ivrForm.valid
    );

    if (!this.nextBtnDisabled) this.checkValidService.isCanActivate(true);
  }

  ngOnInit(): void {
    this.ivrForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      timeout: new FormControl('', Validators.pattern(/^\d+$/)),
      invalidRetries: new FormControl(''),
      announcement: new FormControl(''),
      description: new FormControl(''),
    });

    this.setFormActive();
  }

  // Add invalid messages
  // Add localStorage service
  // Add page for created menus
  // Change color for disabled button

  submitForm() {
    if (this.checkValidService.isFormValid) {
      this.checkValidService.isCanActivate(true);
      const formValue = this.ivrForm.value;
      const timeout = Number(this.ivrData?.timeout) || 0;
      const invalidRetries = Number(this.ivrData?.invalidRetries) || 0;

      this.ivrData = { ...formValue, timeout, invalidRetries };
    }
  }

  ngOnDestroy(): void {
    this.ivrFormSubj$.unsubscribe();
  }
}
