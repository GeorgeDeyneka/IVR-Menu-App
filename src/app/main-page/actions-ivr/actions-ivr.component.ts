import { Component, QueryList, ViewChildren } from '@angular/core';
import { FORM_DATA } from 'src/app/models/data/input-data';
import { ActionsFormData } from 'src/app/models/interfaces/Actions.interface';
import { ActionsTableComponent } from './actions-table/actions-table.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CreateFormObject } from 'src/app/models/interfaces/CreateIvr.interface';
import { Ivr, IvrEntity } from 'src/app/models/interfaces/Ivr.interface';
import { IvrAddService } from 'src/app/ivr-add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-ivr',
  templateUrl: './actions-ivr.component.html',
  styleUrls: ['./actions-ivr.component.scss'],
})
export class ActionsIvrComponent {
  @ViewChildren('actionsTable')
  actionsTableComponents: QueryList<ActionsTableComponent>;
  public formDataArr: Array<ActionsFormData[]> = FORM_DATA;
  public ivrEntityList: IvrEntity[] = [];
  public fullIvrMenu: Ivr;

  constructor(
    private localStorageService: LocalStorageService,
    private ivrAddService: IvrAddService,
    private router: Router
  ) {}

  createMenu() {
    this.convertIvrData();
    this.ivrAddService.addNewIvr(this.fullIvrMenu);
    this.router.navigateByUrl('/');
  }

  convertIvrData() {
    const ivrMenu: CreateFormObject =
      this.localStorageService.getData('ivrClearData')!;

    this.convertEntityItem(ivrMenu.id);
    this.convertIvrMenu(ivrMenu);
  }

  convertEntityItem(ivrId: Number) {
    this.actionsTableComponents.forEach((component) => {
      const id = Math.floor(Math.random() * 10000);
      const ivrEntityItem: IvrEntity = {
        ...component.actionsForm.getRawValue(),
        ivrId,
        id,
      };

      this.ivrEntityList.push(ivrEntityItem);
    });
  }

  convertIvrMenu(ivrMenu: CreateFormObject) {
    this.fullIvrMenu = {
      ...ivrMenu,
      ivrEntityList: this.ivrEntityList,
    };
  }
}
