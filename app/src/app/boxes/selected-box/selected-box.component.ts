import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Edge } from 'src/app/shared/interfaces/edge.interface';
import { BoxService } from 'src/app/shared/services/box.service';

@Component({
  selector: 'app-selected-box',
  templateUrl: './selected-box.component.html',
  styleUrls: ['./selected-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedBoxComponent {
  public selectedBox: Edge | undefined;
  constructor(private readonly boxService: BoxService) {
    this.selectedBox = this.boxService.getSelectedBox();
    console.log(this.selectedBox);
  }
}
