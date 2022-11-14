import { BoxService } from '../shared/services/box.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
})
export class BoxesComponent {
  constructor(private readonly boxService: BoxService) {
    boxService.getBoxes().subscribe(boxes => {
      console.log(boxes);
    });
  }
}
