import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageToNav = 'recipe';

  onNavigate(page: string) {
    console.log('loading the page: ' + page);

    this.pageToNav = page;
  }
}
