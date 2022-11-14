import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    console.log(opened);
    this.opened = opened;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.isLoading);
    }, 1000);
  }
}
