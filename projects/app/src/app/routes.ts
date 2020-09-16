import { Routes } from '@angular/router';

import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { OverlaysDemoComponent } from './overlays-demo/overlays-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';


export const componentsRoutes: Routes = [
  {
    path: 'drag-drop-demo',
    component: DragDropDemoComponent,
    data: {
      title: 'Drag Drop Demo',
    },
  },
  {
    path: 'overlays-demo',
    component: OverlaysDemoComponent,
    data: {
      title: 'Overlays Demo',
    },
  },
  {
    path: 'table-demo',
    component: TableDemoComponent,
    data: {
      title: 'Table Demo',
    },
  },
];
