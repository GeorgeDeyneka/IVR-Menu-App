import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { CheckValidService } from 'src/app/shared/services/check-valid.service';
import { IvrActionsService } from 'src/app/shared/services/ivr-actions.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActionsFormData,
  ActionsTableData,
} from 'src/app/models/interfaces/Actions.interface';

@Component({
  selector: 'app-actions-table',
  templateUrl: './actions-table.component.html',
  styleUrls: ['./actions-table.component.scss'],
})
export class ActionsTableComponent implements OnInit, OnDestroy {
  @Input() formData: ActionsTableData;
  @Input() emitClick$: Subject<boolean>;
  @Input() componentIndex: number;
  @Output() actionsFormValues = new EventEmitter();

  public actionsForm: FormGroup;
  public actionsInputData: ActionsFormData;
  private actionsFormSubj$: Subscription;
  private emitSubj$: Subscription;

  constructor(
    private fb: FormBuilder,
    private checkValidService: CheckValidService,
    private ivrActionsService: IvrActionsService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.actionsInputData = this.actionsForm.getRawValue();
    this.makeFormActive();

    this.emitSubj$ = this.emitClick$.subscribe((value) => {
      if (value) {
        this.actionsFormValues.emit(this.actionsInputData);
      }
    });
  }

  initForm() {
    const formControls = this.formData.data.reduce(
      (acc: any, elem: ActionsFormData) => {
        const startValue =
          elem.formControlName === 'name' && this.componentIndex >= 2
            ? elem.values[this.componentIndex - 2].value
            : elem.values[0].value;

        acc[elem.formControlName] = new FormControl(
          startValue,
          Validators.required
        );
        return acc;
      },
      {}
    );

    this.actionsForm = this.fb.group(formControls);
  }

  deleteComponentData() {
    this.ivrActionsService.deleteButton(this.formData);
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
    this.emitSubj$.unsubscribe();
  }
}
