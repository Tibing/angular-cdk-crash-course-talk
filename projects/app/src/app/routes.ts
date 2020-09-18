import { Routes } from '@angular/router';

import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { OverlaysDemoComponent } from './overlays-demo/overlays-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { ReorderingListsComponent } from './reordering-lists/reordering-lists.component';
import { TransferBetweenListsComponent } from './transfer-between-lists/transfer-between-lists.component';
import { CustomizingDragDropComponent } from './customizing-drag-drop/customizing-drag-drop.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { TableDatasourceDemoComponent } from './table-datasource-demo/table-datasource-demo.component';
import { DraggableTableComponent } from './draggable-table/draggable-table.component';
import { DraggableOverlayComponent } from './draggable-overlay/draggable-overlay.component';


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
      title: '7. Table Demo',
    },
  },
  {
    path: 'table-datasource-demo',
    component: TableDatasourceDemoComponent,
    data: {
      title: '8. Table Datasource Demo',
    },
  },
  {
    path: 'draggable-table-demo',
    component: DraggableTableComponent,
    data: {
      title: '9. Draggable Table Demo',
    },
  },
  {
    path: 'draggable-overlay-demo',
    component: DraggableOverlayComponent,
    data: {
      title: '10. Draggable Overlay Demo',
    },
  },
];
