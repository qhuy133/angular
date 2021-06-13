import { Routes, RouterModule } from '@angular/router';
import { FoodImagesComponent } from './food-images.component';

const routes: Routes = [
  {
    path: '',
    component: FoodImagesComponent
  },
];

export const FoodImagesRoutes = RouterModule.forChild(routes);
