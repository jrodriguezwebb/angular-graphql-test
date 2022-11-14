import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Edge } from '../../interfaces/edge.interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {
  @Input() box: Edge | undefined;
  @Output() selectedBoxEvent = new EventEmitter<Edge>();

  public selectBox() {
    this.selectedBoxEvent.emit(this.box);
  }
}
