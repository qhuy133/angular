import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalImagesComponent } from './animal-images.component';
import { AnimalImagesRoutes } from './animal-images.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AnimalImagesRoutes,
    SharedModule
  ],
  declarations: [AnimalImagesComponent]
})
export class AnimalImagesModule { }
