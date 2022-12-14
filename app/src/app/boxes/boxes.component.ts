import { BoxesDTO } from '../shared/interfaces/boxes-dto.interface';
import { BoxService } from '../shared/services/box.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Edge } from '../shared/interfaces/edge.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BoxesRoutesEnum } from './boxes.routes';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesComponent {
  public boxes$: Observable<BoxesDTO>;
  constructor(private readonly boxService: BoxService, private router: Router) {
    this.boxes$ = this.boxService.getBoxes();
  }

  public handleSelectedBox(selectedBox: Edge) {
    this.boxService.setSelectedBox(selectedBox);
    this.router.navigate([
      `${BoxesRoutesEnum.Boxes}/${BoxesRoutesEnum.SelectedBox}`,
    ]);
  }
}
