import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNum = 0;

  constructor() {}

  ngOnInit() {}

  onGameStart() {
    this.interval = setInterval(() => {
      // Funtion that gets executed every tick.
      this.intervalFired.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);
  }

  onGamePause() {
    clearInterval(this.interval);
  }
}
