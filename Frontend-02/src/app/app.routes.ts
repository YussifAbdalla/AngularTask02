import { Routes, provideRouter } from '@angular/router';

// TASK:01: add routes for bits and pieces. Each route refers to a list component that lists dummy data
// lazy load the routes
// TASK:02 add title using title strategy
const routes: Routes = [
  {
    path: 'bits',
    loadChildren: () => import('./routes/bit.route').then(m => m.BitRoutes),
    title: 'Bits Page'
  },
  {
    path: 'pieces',
    loadChildren: () => import('./routes/piece.route').then(m => m.PieceRoutes), 
    title: 'Pieces Page'
  }
];

export const AppRoutingProvider = [provideRouter(routes)];
