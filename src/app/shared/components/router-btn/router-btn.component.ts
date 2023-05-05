import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-btn',
  templateUrl: './router-btn.component.html',
  styleUrls: ['./router-btn.component.scss'],
})
export class RouterBtnComponent {

  constructor(private router: Router) {}

  @Input() text: string;
  @Input() route: string;
  @Input() disStatus: boolean = false;
}
