import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server has been created!';
  userCreated = false;
  usernameCreationStatus = 'No user has been created!';
  numServers = 1;
  serverName = 'Init Server';
  username = '';
  servers = [];
  hideDetailsToggle = true;
  hideDetailsToggleCount = 0;
  hideDetailsToggleCountList = [];
  overFive = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.numServers = this.numServers + 1;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'The server ' + this.serverName + ' was added. ' + this.numServers + ' servers have been created!';
  }

  OnAddUser() {
    this.userCreated = true;
    this.usernameCreationStatus = 'The user ' + this.username + ' was created!';
    this.username = '';
  }

  OnDisplayDetailsBtn() {
    this.hideDetailsToggle = !this.hideDetailsToggle;
    // this.hideDetailsToggleCount = this.hideDetailsToggleCount + 1;
    this.hideDetailsToggleCountList.push(new Date());
  }

}
