import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { ActionsFormData } from 'src/app/models/interfaces/Actions.interface';
import { CheckValidService } from 'src/app/shared/services/check-valid.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-actions-table',
  templateUrl: './actions-table.component.html',
  styleUrls: ['./actions-table.component.scss'],
})
export class ActionsTableComponent implements OnInit {
  @Input() formData: Array<ActionsFormData>;
  public actionsForm: FormGroup;
  public actionsFormSubj$: Subscription;
  public actionsInputData: ActionsFormData;

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private checkValidService: CheckValidService
  ) {}

  ngOnInit(): void {
    const formControls = this.formData.reduce(
      (acc: any, elem: ActionsFormData) => {
        acc[elem.formControlName] = new FormControl(
          elem.values[0].value,
          Validators.required
        );
        return acc;
      },
      {}
    );

    this.actionsForm = this.fb.group(formControls);
    this.actionsInputData = this.actionsForm.getRawValue();
    this.makeFormActive();
  }

  makeFormActive() {
    this.actionsFormSubj$ = this.actionsForm.valueChanges
      .pipe(debounceTime(250))
      .subscribe((data) => {
        this.actionsInputData = data;
        this.checkValid();
      });
  }

  checkValid() {
    this.checkValidService.checkValid(this.actionsForm.valid);
  }

  ngOnDestroy(): void {
    this.actionsFormSubj$.unsubscribe();
  }
}
