import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { OverlaysDemoComponent } from './overlays-demo/overlays-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { componentsRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ReorderingListsComponent } from './reordering-lists/reordering-lists.component';
import { TransferBetweenListsComponent } from './transfer-between-lists/transfer-between-lists.component';
import { CustomizingDragDropComponent } from './customizing-drag-drop/customizing-drag-drop.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...componentsRoutes,
];

@NgModule({
  declarations: [
    AppComponent,
    DragDropDemoComponent,
    OverlaysDemoComponent,
    TableDemoComponent,
    HomeComponent,
    ReorderingListsComponent,
    TransferBetweenListsComponent,
    CustomizingDragDropComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule.forRoot(routes),
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
