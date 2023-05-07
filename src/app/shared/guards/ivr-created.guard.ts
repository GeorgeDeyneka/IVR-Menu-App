import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CheckValidService } from '../services/check-valid.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class IvrCreatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private checkValidService: CheckValidService,
    private localStorageService: LocalStorageService
  ) {}

  canActivate() {
    if (
      this.checkValidService.canActivateNextPage ||
      this.localStorageService.getData('ivrClearData')
    ) {
      return true;
    } else {
      this.router.navigateByUrl('/create-page');
      return false;
    }
  }
}
