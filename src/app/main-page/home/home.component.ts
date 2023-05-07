import { Component, OnInit } from '@angular/core';
import { IvrAddService } from 'src/app/shared/services/ivr-add.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public arrMenusLength: number = 0;
  constructor(private ivrAddService: IvrAddService) {}

  ngOnInit(): void {
    this.arrMenusLength = this.ivrAddService.getData().length;
  }
}
