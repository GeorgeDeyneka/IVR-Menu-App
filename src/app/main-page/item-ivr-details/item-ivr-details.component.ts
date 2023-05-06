import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IvrAddService } from 'src/app/ivr-add.service';
import { Ivr } from 'src/app/models/interfaces/Ivr.interface';

@Component({
  selector: 'app-item-ivr-details',
  templateUrl: './item-ivr-details.component.html',
  styleUrls: ['./item-ivr-details.component.scss'],
})
export class ItemIvrDetailsComponent implements OnInit {
  public ivrItem: Ivr;

  constructor(
    private ivrAddService: IvrAddService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id');

    if (id !== null && this.ivrAddService.getItem(+id)) {
      this.ivrItem = this.ivrAddService.getItem(+id)!;
    } else {
      this.router.navigateByUrl('/404-page');
    }
  }
}
