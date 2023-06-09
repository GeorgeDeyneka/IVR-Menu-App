import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ivr } from 'src/app/models/interfaces/Ivr.interface';
import { IvrAddService } from 'src/app/shared/services/ivr-add.service';

@Component({
  selector: 'app-list-ivr',
  templateUrl: './list-ivr.component.html',
  styleUrls: ['./list-ivr.component.scss'],
})
export class ListIvrComponent {
  public arrIvrs: Ivr[] = [];
  public ivrsSubj$: Subscription;

  constructor(private ivrAddService: IvrAddService) {}

  ngOnInit(): void {
    this.ivrsSubj$ = this.ivrAddService.subj$.subscribe((data) => {
      this.arrIvrs = data;
    });
  }

  ngOnDestroy(): void {
    this.ivrsSubj$.unsubscribe();
  }
}
