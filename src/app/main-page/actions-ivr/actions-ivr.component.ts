import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  ActionsFormValues,
  ActionsTableData,
} from 'src/app/models/interfaces/Actions.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { IvrAddService } from 'src/app/shared/services/ivr-add.service';
import { CreateFormObject } from 'src/app/models/interfaces/CreateIvr.interface';
import { Ivr } from 'src/app/models/interfaces/Ivr.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IvrActionsService } from 'src/app/shared/services/ivr-actions.service';

@Component({
  selector: 'app-actions-ivr',
  templateUrl: './actions-ivr.component.html',
  styleUrls: ['./actions-ivr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsIvrComponent {
  public emitClick: boolean = false;
  public formDataArr: Array<ActionsTableData> = [];
  public ivrEntityList: ActionsFormValues[] = [];
  public fullIvrMenu: Ivr;
  public formDataSubj$: Subscription;
  public buttonsCount: number;
  public maxButtonsCount: number = 12;

  constructor(
    private cdr: ChangeDetectorRef,
    private localStorageService: LocalStorageService,
    private ivrAddService: IvrAddService,
    private ivrActionsService: IvrActionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formDataSubj$ = this.ivrActionsService.subj$.subscribe((data) => {
      this.formDataArr = data;
      this.buttonsCount = data.length;
    });
  }

  clickEmit() {
    this.emitClick = true;
  }

  addButtonForm() {
    if (this.buttonsCount === this.maxButtonsCount) return;
    const newButton = this.ivrAddService.generateActionsButtonData();
    this.ivrActionsService.addNewButton(newButton);
  }

  getDataFromChild(event: any) {
    this.buttonsCount--;
    this.ivrEntityList.push(event);

    if (!this.buttonsCount) {
      this.convertIvrData();
      this.ivrActionsService.resetButtonsData();
      this.cdr.markForCheck();
      this.ivrAddService.addNewIvr(this.fullIvrMenu);
      this.localStorageService.removeData('ivrClearData')!;
      this.router.navigateByUrl('/');
    }
  }

  convertIvrData() {
    const ivrMenu: CreateFormObject =
      this.localStorageService.getData('ivrClearData')!;

    this.fullIvrMenu = this.ivrAddService.convertIvrActionsData(
      ivrMenu,
      this.ivrEntityList
    );
  }

  ngOnDestroy(): void {
    this.formDataSubj$.unsubscribe();
  }
}
