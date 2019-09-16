import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // tslint:disable-next-line: no-output-rename
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // tslint:disable-next-line: no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLFormElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverNameInput: HTMLFormElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    });
  }
}
