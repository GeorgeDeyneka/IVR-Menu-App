import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IvrAddService } from 'src/app/ivr-add.service';
import { Ivr } from 'src/app/models/interfaces/Ivr.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
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
