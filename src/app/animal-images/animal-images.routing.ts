import { Routes, RouterModule } from '@angular/router';
import { AnimalImagesComponent } from './animal-images.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalImagesComponent
  },
];

export const AnimalImagesRoutes = RouterModule.forChild(routes);
