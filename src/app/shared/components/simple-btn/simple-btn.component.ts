import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-btn',
  templateUrl: './simple-btn.component.html',
  styleUrls: ['./simple-btn.component.scss'],
})
export class SimpleBtnComponent {
  @Input() text: string;
  @Input() disStatus: boolean = false;
}
