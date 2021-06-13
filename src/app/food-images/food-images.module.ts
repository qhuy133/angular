import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodImagesComponent } from './food-images.component';
import { FoodImagesRoutes } from './food-images.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FoodImagesRoutes,
    SharedModule
  ],
  declarations: [FoodImagesComponent]
})
export class FoodImagesModule { }
