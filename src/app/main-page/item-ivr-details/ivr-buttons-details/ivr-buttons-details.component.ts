import { Component, Input } from '@angular/core';
import { Ivr } from 'src/app/models/interfaces/Ivr.interface';
import { ButtonLabel } from 'src/app/models/interfaces/Labels.interface';

@Component({
  selector: 'app-ivr-buttons-details',
  templateUrl: './ivr-buttons-details.component.html',
  styleUrls: ['./ivr-buttons-details.component.scss'],
})
export class IvrButtonsDetailsComponent {
  @Input() ivrItem: Ivr;
  @Input() buttonLabels: ButtonLabel[];
}
