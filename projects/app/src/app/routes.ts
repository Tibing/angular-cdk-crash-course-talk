import { Routes } from '@angular/router';

import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { OverlaysDemoComponent } from './overlays-demo/overlays-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { ReorderingListsComponent } from './reordering-lists/reordering-lists.component';
import { TransferBetweenListsComponent } from './transfer-between-lists/transfer-between-lists.component';
import { CustomizingDragDropComponent } from './customizing-drag-drop/customizing-drag-drop.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';


export const componentsRoutes: Routes = [
  {
    path: 'drag-drop-demo',
    component: DragDropDemoComponent,
    data: {
      title: '1. Simple Drag Drop Demo',
    },
  },
  {
    path: 'reordering-lists',
    component: ReorderingListsComponent,
    data: {
      title: '2. Reordering Lists',
    },
  },
  {
    path: 'transfer-between-lists',
    component: TransferBetweenListsComponent,
    data: {
      title: '3. Transfer Data Between Lists',
    },
  },
  {
    path: 'customizing-drag-drop',
    component: CustomizingDragDropComponent,
    data: {
      title: '4. Customizing Drag Drop placeholder and preview',
    },
  },
  {
    path: 'overlays-demo',
    component: OverlaysDemoComponent,
    data: {
      title: '5. Dialog Demo',
    },
  },
  {
    path: 'tooltip-demo',
    component: TooltipDemoComponent,
    data: {
      title: '6. Tooltip Demo',
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
