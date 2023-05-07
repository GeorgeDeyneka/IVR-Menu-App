import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BUTTON_DATA_LABELS, IVR_DATA_LABELS } from 'src/app/models/data/label-data';
import { Ivr } from 'src/app/models/interfaces/Ivr.interface';
import { IvrAddService } from 'src/app/shared/services/ivr-add.service';

@Component({
  selector: 'app-item-ivr-details',
  templateUrl: './item-ivr-details.component.html',
  styleUrls: ['./item-ivr-details.component.scss'],
})
export class ItemIvrDetailsComponent implements OnInit {
  public ivrItem: Ivr;
  public buttonLabels = BUTTON_DATA_LABELS;
  public menuLabels = IVR_DATA_LABELS;

  constructor(
    private ivrAddService: IvrAddService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) { }

  getObjectKeys(obj: Ivr) {
    return Object.keys(obj)
  }

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id');

    if (id !== null && this.ivrAddService.getItem(+id)) {
      this.ivrItem = this.ivrAddService.getItem(+id)!;
    } else {
      this.router.navigateByUrl('/404-page');
    }
  }
}
