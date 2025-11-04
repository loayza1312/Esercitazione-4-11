import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TipsService } from '../../core/tips';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  tip: string = '';

  constructor(private tips: TipsService) {
    this.tip = this.tips.random(); // inizializzata qui
  }

  refresh() {
    this.tip = this.tips.random();
  }
}
