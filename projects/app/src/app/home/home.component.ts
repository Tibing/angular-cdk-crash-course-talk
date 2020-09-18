import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Routes } from '@angular/router';

import { componentsRoutes } from '../routes';


@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
        padding-top: 2rem;
        padding-left: 2rem;
      }

      .mat-list-item {
        font-size: 32px;
        margin-bottom: 0.5rem;
      }

      a {
        color: #4285F4;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `
  ],
  template: `
    <mat-list>
      <mat-list-item *ngFor="let component of components">
        <a [routerLink]="component.path">
          {{ component.data.title }}
        </a>
      </mat-list-item>
    </mat-list>
  `,
})
export class HomeComponent {
  components: Routes = componentsRoutes;
}
