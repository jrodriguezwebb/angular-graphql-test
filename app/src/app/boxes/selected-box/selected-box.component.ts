import { BoxesRoutesEnum } from '../boxes.routes';
import { BoxService } from 'src/app/shared/services/box.service';
import { catchError, tap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Edge } from 'src/app/shared/interfaces/edge.interface';
import { Observable } from 'rxjs';
import { OpenBoxClass } from 'src/app/shared/interfaces/open-box.interface';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-selected-box',
  templateUrl: './selected-box.component.html',
  styleUrls: ['./selected-box.component.scss'],
})
export class SelectedBoxComponent {
  public selectedBox: Edge | undefined;
  public isLoading = false;
  public opened = false;
  public openBox$: Observable<OpenBoxClass | undefined>;
  constructor(
    private readonly boxService: BoxService,
    private readonly userService: UserService,
    private router: Router
  ) {
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
      this.openBox$ = this.boxService.openBox(openBoxInput).pipe(
        tap(() => {
          this.isLoading = false;
          this.userService.getUserInformation().subscribe();
        }),
        catchError(error => {
          this.isLoading = false;
          throw new Error(error);
        })
      );
    }
  }
}
