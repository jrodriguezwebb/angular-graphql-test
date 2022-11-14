import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Edge } from '../../interfaces/edge.interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {
  @Input() box: Edge | undefined;

  public selectBox() {
    console.log(this.box);
  }
}
