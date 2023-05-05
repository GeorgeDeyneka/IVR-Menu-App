import { Component } from '@angular/core';
import { FORM_DATA } from 'src/app/models/data/input-data';
import { ActionsFormData } from 'src/app/models/interfaces/Actions.interface';

@Component({
  selector: 'app-actions-ivr',
  templateUrl: './actions-ivr.component.html',
  styleUrls: ['./actions-ivr.component.scss'],
})
export class ActionsIvrComponent {
  public formDataArr: Array<ActionsFormData[]> = FORM_DATA;
}
