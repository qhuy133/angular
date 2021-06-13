import { Component, OnInit } from '@angular/core';
import { ListContainer } from '../shared/list-container';
import { baseInterface } from 'src/app/types/model';
import { ActivatedRoute, Router } from '@angular/router';
import { GetImageService } from '../api/get-image.service';

@Component({
  selector: 'app-food-images',
  templateUrl: './food-images.component.html',
  styleUrls: ['./food-images.component.scss']
})
export class FoodImagesComponent extends ListContainer<baseInterface> implements OnInit {

  isLoading = true

  constructor(
    route: ActivatedRoute,
    router: Router,
    private getImageService: GetImageService,
  ) {
    super(route, router, 8)
  }



  protected fetch() {
    const { currentPage, quantity } = this
    const page = currentPage
    const limit = quantity
    const search = this.query
    return this.getImageService.getAnimalImage({ page, limit, search })
  }

  protected handleError(reason: any) {
    console.log('Error')
  }


}
