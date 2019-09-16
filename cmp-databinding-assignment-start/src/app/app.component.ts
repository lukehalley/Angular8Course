import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onIntervalFired(tickNumber) {
    if (tickNumber % 2 === 0) {
      this.evenNumbers.push(tickNumber);
    } else {
      this.oddNumbers.push(tickNumber);
    }
  }
}
