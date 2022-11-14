import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Edge } from 'src/app/shared/interfaces/edge.interface';
import { BoxService } from 'src/app/shared/services/box.service';

@Component({
  selector: 'app-selected-box',
  templateUrl: './selected-box.component.html',
  styleUrls: ['./selected-box.component.scss'],
})
export class SelectedBoxComponent {
  public selectedBox: Edge | undefined;
  public isLoading = false;
  public opened = false;
  constructor(private readonly boxService: BoxService) {
    this.selectedBox = this.boxService.getSelectedBox();
  }

  public handleBoxOpening(opened: boolean) {
    this.opened = opened;
    this.isLoading = true;
    if (this.selectedBox) {
      const { id, cost } = this.selectedBox.node;
      const openBoxInput = {
        boxId: id,
        amount: Math.floor(cost),
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
        .subscribe(response => {
          console.log(response);
          this.isLoading = false;
        });
    }
  }
}
