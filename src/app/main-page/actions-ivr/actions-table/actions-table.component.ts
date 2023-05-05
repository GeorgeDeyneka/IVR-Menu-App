import { Component, Input } from '@angular/core';
import { ActionsFormData } from 'src/app/models/interfaces/Actions.interface';

@Component({
  selector: 'app-actions-table',
  templateUrl: './actions-table.component.html',
  styleUrls: ['./actions-table.component.scss'],
})
export class ActionsTableComponent {
  @Input() formData: Array<ActionsFormData>;
}
