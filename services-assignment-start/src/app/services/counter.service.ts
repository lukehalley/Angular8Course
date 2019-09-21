export class CounterService {
  activeSwitchCount = 0;
  inactiveSwitchCount = 0;

  logStatChange(status: string) {
    console.log('Server Status Changed To: ' + status);
  }

  incrementActiveCount() {
    this.activeSwitchCount = this.activeSwitchCount + 1;
    console.log(
      'Switched a user to ACTIVE. Count is now at: ' + this.activeSwitchCount
    );
  }

  incrementInactiveCount() {
    this.inactiveSwitchCount = this.inactiveSwitchCount + 1;
    console.log(
      'Switched a user to INACTIVE. Count is now at: ' +
        this.inactiveSwitchCount
    );
  }
}
