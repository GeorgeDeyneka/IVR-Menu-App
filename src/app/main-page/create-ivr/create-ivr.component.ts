import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, debounceTime } from 'rxjs';
import { CreateFormObject, CreateFormValues } from 'src/app/models/interfaces/CreateIvr.interface';
import { CheckValidService } from 'src/app/shared/services/check-valid.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-create-ivr',
  templateUrl: './create-ivr.component.html',
  styleUrls: ['./create-ivr.component.scss'],
})
export class CreateIvrComponent implements OnInit {
  public ivrForm: FormGroup;
  public ivrFormSubj$: Subscription;
  public nextBtnDisabled: boolean = true;
  private ivrClearData: CreateFormObject;
  private ivrInputData: CreateFormValues | null =
    this.localStorageService.getData('ivrInputData');

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private checkValidService: CheckValidService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.ivrForm = this.fb.group({
      name: new FormControl(this.ivrInputData?.name || '', [
        Validators.required,
        Validators.minLength(4),
      ]),
      timeout: new FormControl(
        this.ivrInputData?.timeout || '',
        Validators.pattern(/^\d+$/)
      ),
      invalidRetries: new FormControl(
        this.ivrInputData?.invalidRetries || '',
        Validators.pattern(/^\d+$/)
      ),
      announcement: new FormControl(this.ivrInputData?.announcement || ''),
      description: new FormControl(this.ivrInputData?.description || ''),
    });

    this.checkValid();
    this.makeFormActive();
  }

  makeFormActive() {
    this.ivrFormSubj$ = this.ivrForm.valueChanges
      .pipe(debounceTime(250))
      .subscribe((data) => {
        this.ivrInputData = data;
        this.checkValid();
        this.localStorageService.setData<CreateFormValues>(
          'ivrInputData',
          this.ivrInputData!
        );
      });
  }

  checkValid() {
    this.nextBtnDisabled = !this.checkValidService.checkValid(
      this.ivrForm.valid
    );
  }

  submitForm() {
    if (this.checkValidService.isFormValid) {
      this.convertIvrData();
      this.localStorageService.setData<CreateFormObject>(
        'ivrClearData',
        this.ivrClearData
      );

      this.localStorageService.removeData('ivrInputData');
      this.setActivateAndRedirect();
    }
  }

  convertIvrData() {
    const id = Math.floor(Math.random() * 10000);
    const formValue = this.ivrForm.value;
    const ivrEntityList: any[] = [];
    const timeout = Number(this.ivrInputData?.timeout) || 0;
    const invalidRetries = Number(this.ivrInputData?.invalidRetries) || 0;

    this.ivrClearData = { ...formValue, timeout, invalidRetries, ivrEntityList, id };
  }

  setActivateAndRedirect() {
    this.checkValidService.isCanActivate(true);
    this.router.navigateByUrl('/actions-page');
  }

  ngOnDestroy(): void {
    this.ivrFormSubj$.unsubscribe();
  }
}
