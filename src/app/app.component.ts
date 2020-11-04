import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-fab color="primary" [routerLink]="''"><mat-icon>home</mat-icon></button>
      <button mat-fab color="primary" [routerLink]="'animals'"><mat-icon>pets</mat-icon></button>
      <button mat-fab color="primary" [routerLink]="'veterinarians'"><mat-icon>science</mat-icon></button>
    </mat-toolbar>
    <div class="p-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    'button {margin-right: 1em}'
  ]
})
export class AppComponent {
  title = 'VeterinaireAppM2';
}
