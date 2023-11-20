import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/drag-and-drop/drag-and-drop.component').then(c => c.DragAndDropComponent)
    },
];
