import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .spinner-text {
      font-size: 20px;
      color: white;
    }
  `],
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
    <ngx-spinner
      bdColor="#333"
      size="large"
      color="#fff"
      type="pacman"
      [fullScreen]="true"
    >
      <p class="spinner-text">Loading...</p>
    </ngx-spinner>
  `,
})
export class AppComponent { }
