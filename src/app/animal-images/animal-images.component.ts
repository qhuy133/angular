import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { GetImageService } from 'src/app/api/get-image.service'
import { ListContainer } from 'src/app/shared/list-container'

import { baseInterface } from 'src/app/types/model'

@Component({
  selector: 'app-dog-image',
  templateUrl: './animal-images.component.html',
  styleUrls: ['./animal-images.component.scss']
})
export class AnimalImagesComponent extends ListContainer<baseInterface> implements OnInit {
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
