import { Injectable } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Ivr } from './models/interfaces/Ivr.interface';
import { BehaviorSubject } from 'rxjs';

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

  // convertIvrData() {
  //   const id = Math.floor(Math.random() * 10000);
  //   const formValue = this.ivrForm.value;
  //   const ivrEntityList: any[] = [];
  //   const timeout = Number(this.ivrInputData?.timeout) || 0;
  //   const invalidRetries = Number(this.ivrInputData?.invalidRetries) || 0;

  //   this.ivrClearData = {
  //     ...formValue,
  //     timeout,
  //     invalidRetries,
  //     ivrEntityList,
  //     id,
  //   };
  // }
}
