import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CheckValidService } from '../services/check-valid.service';

@Injectable({
  providedIn: 'root',
})
export class IvrCreatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private checkValidService: CheckValidService
  ) {}

  canActivate() {
    if (this.checkValidService.canActivateNextPage) {
      return true;
    } else {
      this.router.navigateByUrl('/create-page');
      return false;
    }
  }
}
