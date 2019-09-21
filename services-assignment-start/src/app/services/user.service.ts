// import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Max'];
  inactiveUsers = ['Chris'];

  constructor(private counterService: CounterService) {}

  setUserToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementInactiveCount();
  }

  setUserToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementActiveCount();
  }
}
