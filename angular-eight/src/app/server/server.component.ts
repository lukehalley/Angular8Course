import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    if (this.serverId <= 10) {
      return this.serverId;
    } else {
      return 11;
    }

  }

  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }

  getClass() {
    if (this.serverStatus === 'online') {
      return 'online';
    } else {
      return 'offline';
    }
  }

}
