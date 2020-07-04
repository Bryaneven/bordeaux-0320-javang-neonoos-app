import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'neo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neonoos-app';

  route: Router;

  constructor(private router: Router) {

    this.route = this.router;
  }
}
