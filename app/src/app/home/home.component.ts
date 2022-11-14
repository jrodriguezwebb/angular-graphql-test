import { BoxService } from '../shared/services/box.service';
import { Component } from '@angular/core';

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
