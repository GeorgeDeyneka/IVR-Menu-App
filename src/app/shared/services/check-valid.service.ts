import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckValidService {
  public isFormValid: boolean = false;
  public canActivateNextPage: boolean = false;

  constructor() {}

  checkValid(status: boolean) {
    return (this.isFormValid = status);
  }

  isCanActivate(status: boolean) {
    return (this.canActivateNextPage = status);
  }
}
