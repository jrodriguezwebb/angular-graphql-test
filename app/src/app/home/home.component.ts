import { Component } from '@angular/core';
import { BoxService } from '../shared/services/box.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private readonly boxService: BoxService) {
    boxService.getBoxes().subscribe(boxes => {
      console.log(boxes);
    });
  }
}
