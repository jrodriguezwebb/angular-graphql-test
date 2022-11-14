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
  @Input() type: 'select' | 'open' = 'select';
  @Input() opened = false;
  @Output() selectedBoxEvent = new EventEmitter<Edge>();
  @Output() openBoxEvent = new EventEmitter<boolean>();

  public selectBox(): void {
    this.selectedBoxEvent.emit(this.box);
  }

  public openBox(): void {
    this.opened = true;
    this.openBoxEvent.emit(this.opened);
  }
}
