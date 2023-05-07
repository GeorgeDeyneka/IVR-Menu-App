import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FORM_DATA } from 'src/app/models/data/input-data';
import { ActionsTableData } from 'src/app/models/interfaces/Actions.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class IvrActionsService {
  private arrBtns = this.localStorageService.getData<ActionsTableData[]>(
    'btnsFormData'
  ) || [...FORM_DATA];

  public subj$ = new BehaviorSubject<ActionsTableData[]>(this.getData());

  constructor(private localStorageService: LocalStorageService) {}

  getData() {
    return this.arrBtns;
  }

  addNewButton(button: ActionsTableData) {
    this.arrBtns.push(button);
    this.updateLocalStorage();
    this.updateSubject();
  }

  deleteButton(button: ActionsTableData) {
    this.arrBtns = this.arrBtns.filter((el) => el.id !== button.id);
    this.updateLocalStorage();
    this.updateSubject();
  }

  private updateLocalStorage() {
    this.localStorageService.setData<ActionsTableData[]>(
      'btnsFormData',
      this.arrBtns
    );
  }

  private updateSubject() {
    this.subj$.next(this.arrBtns);
  }
}
