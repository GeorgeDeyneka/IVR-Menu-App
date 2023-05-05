import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

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

  constructor(private fb: FormBuilder) {}

  setFormActive() {
    this.ivrFormSubj$ = this.ivrForm.valueChanges
      .pipe(debounceTime(250))
      .subscribe((data) => {
        this.ivrData = data;
        this.nextBtnDisabled = this.ivrForm.valid ? false : true;
      });
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
  // Add Guard on actions-page
  // Add localStorage service
  // Add page for created menus

  submitForm() {
    if (this.ivrForm.valid) {
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
