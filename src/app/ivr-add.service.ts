import { Injectable } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Ivr, IvrEntity } from './models/interfaces/Ivr.interface';
import { BehaviorSubject } from 'rxjs';
import {
  CreateFormObject,
  CreateFormValues,
} from './models/interfaces/CreateIvr.interface';
import { ActionsFormValues } from './models/interfaces/Actions.interface';
import { BASE_SELECT } from './models/data/input-data';

@Injectable({
  providedIn: 'root',
})
export class IvrAddService {
  public arrIvrs: Ivr[] = this.localStorageService.getData('ivrMenus') || [];
  public subj$ = new BehaviorSubject<Ivr[]>(this.getData());

  constructor(private localStorageService: LocalStorageService) {}

  getData() {
    return this.arrIvrs;
  }

  getItem(id: number) {
    return this.arrIvrs.find((elem) => elem.id === id);
  }

  addNewIvr(elem: Ivr) {
    this.arrIvrs.push(elem);
    this.localStorageService.setData<Ivr[]>('ivrMenus', this.arrIvrs);
    this.updateSubject();
  }

  updateSubject() {
    this.subj$.next(this.arrIvrs);
  }

  generateRandomId() {
    return Math.floor(Math.random() * 10000);
  }

  generateActionsButtonData() {
    const values: any[] = [];

    for (let i = 0; i < 10; i++) {
      values.push({
        value: i.toString(),
        name: i.toString(),
      });
    }

    return [
      {
        title: 'Button',
        formControlName: 'name',
        values,
      },
      ...BASE_SELECT,
    ];
  }

  convertIvrCreateData(formValue: CreateFormValues) {
    const id = this.generateRandomId();
    const ivrEntityList: IvrEntity[] = [];
    const timeout = Number(formValue.timeout) || 0;
    const invalidRetries = Number(formValue.invalidRetries) || 0;

    return {
      ...formValue,
      timeout,
      invalidRetries,
      ivrEntityList,
      id,
    };
  }

  convertIvrActionsData(
    convertable: CreateFormObject,
    formValues: ActionsFormValues[]
  ) {
    const listArr: IvrEntity[] = formValues.map((el) => {
      return {
        ...el,
        ivrId: convertable.id,
        id: this.generateRandomId(),
      };
    });

    return {
      ...convertable,
      ivrEntityList: listArr,
    };
  }
}
