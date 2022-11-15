import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Edge } from 'src/app/shared/interfaces/edge.interface';
import { BoxService } from 'src/app/shared/services/box.service';
import { Router } from '@angular/router';
import { BoxesRoutesEnum } from '../boxes.routes';
import { OpenBoxClass } from 'src/app/shared/interfaces/open-box.interface';

@Component({
  selector: 'app-selected-box',
  templateUrl: './selected-box.component.html',
  styleUrls: ['./selected-box.component.scss'],
})
export class SelectedBoxComponent {
  public selectedBox: Edge | undefined;
  public isLoading = false;
  public opened = false;
  public openBox: OpenBoxClass | undefined;
  constructor(private readonly boxService: BoxService, private router: Router) {
    this.selectedBox = this.boxService.getSelectedBox();
    if (!this.selectedBox) {
      this.router.navigate([BoxesRoutesEnum.Boxes]);
    }
  }

  public handleBoxOpening(opened: boolean) {
    this.opened = opened;
    this.isLoading = true;
    if (this.selectedBox) {
      const { id, cost } = this.selectedBox.node;
      const openBoxInput = {
        boxId: id,
        amount: Math.ceil(cost),
        multiplierBoxBet: 1.0,
      };
      this.boxService
        .openBox(openBoxInput)
        .pipe(
          catchError(error => {
            this.isLoading = false;
            throw new Error(error);
          })
        )
        .subscribe(openBox => {
          this.openBox = openBox;
          this.isLoading = false;
        });
    }
  }
}
