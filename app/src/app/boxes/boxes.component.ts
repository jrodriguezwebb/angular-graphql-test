import { BoxService } from '../shared/services/box.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BoxesDTO } from '../shared/interfaces/boxes-dto.interface';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesComponent {
  public boxes$: Observable<BoxesDTO>;
  constructor(private readonly boxService: BoxService) {
    this.boxes$ = this.boxService.getBoxes();
  }
}
