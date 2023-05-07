import { Component } from '@angular/core';
import { FORM_DATA } from 'src/app/models/data/input-data';
import {
  ActionsFormValues,
  ActionsTableData,
} from 'src/app/models/interfaces/Actions.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { IvrAddService } from 'src/app/shared/services/ivr-add.service';
import { CreateFormObject } from 'src/app/models/interfaces/CreateIvr.interface';
import { Ivr } from 'src/app/models/interfaces/Ivr.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-ivr',
  templateUrl: './actions-ivr.component.html',
  styleUrls: ['./actions-ivr.component.scss'],
})
export class ActionsIvrComponent {
  public emitClick: boolean = false;
  public formDataArr: Array<ActionsTableData> = FORM_DATA;
  public ivrEntityList: ActionsFormValues[] = [];
  public fullIvrMenu: Ivr;
  public buttonsCount: number = this.formDataArr.length;
  public maxButtonsCount: number = 12;

  constructor(
    private localStorageService: LocalStorageService,
    private ivrAddService: IvrAddService,
    private router: Router
  ) {}

  clickEmit() {
    this.emitClick = true;
  }

  addButtonForm() {
    if (this.buttonsCount === this.maxButtonsCount) return;
    this.formDataArr.push(this.ivrAddService.generateActionsButtonData());
    this.buttonsCount = this.formDataArr.length;
  }

  getDataFromChild(event: any) {
    this.buttonsCount--;
    this.ivrEntityList.push(event);

    if (!this.buttonsCount) {
      this.convertIvrData();
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
}
