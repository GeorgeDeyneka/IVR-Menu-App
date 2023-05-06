import { Injectable } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Ivr, IvrEntity } from './models/interfaces/Ivr.interface';
import { BehaviorSubject } from 'rxjs';
import {
  CreateFormObject,
  CreateFormValues,
} from './models/interfaces/CreateIvr.interface';
import { ActionsFormValues } from './models/interfaces/Actions.interface';

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
    const id = this.generateRandomId();
    const listArr: IvrEntity[] = formValues.map((el) => {
      return {
        ...el,
        ivrId: convertable.id,
        id,
      };
    });

    return {
      ...convertable,
      ivrEntityList: listArr,
    };
  }
}
