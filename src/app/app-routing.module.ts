import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'add-book', loadChildren: () => import('./add-book/add-book.module').then(m => m.AddBookPageModule) }, 
  { path: 'book-detail/:id', loadChildren: () => import('./book-detail/book-detail.module').then(m => m.BookDetailPageModule)},
// Asegúrate de que el nombre del módulo es correcto
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
