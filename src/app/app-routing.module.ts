import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animals'
  },
  {
    path: 'animals',
    loadChildren: () => import('./animal-images/animal-images.module').then(t => t.AnimalImagesModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./food-images/food-images.module').then(t => t.FoodImagesModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
