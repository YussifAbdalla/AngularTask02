import { Routes } from '@angular/router';
import { PieceDetailsComponent } from '../components/piece/details/details.component';
import { PieceListComponent } from '../components/piece/list/list.component';
// **gulpimport**

export const PieceRoutes: Routes = [
  // TASK:02: add a route for piece details. The route refers to a details component that shows dummy data
  {
    path: '',
    component: PieceListComponent
  }, 
  {
    path:'details',
    component: PieceDetailsComponent
  }
];
