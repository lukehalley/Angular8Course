import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuItemSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  menuItemSelect(selection: string) {
    this.menuItemSelected.emit(selection);
    console.log(selection);
  }
}
