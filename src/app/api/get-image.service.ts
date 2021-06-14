import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalModel, FoodImageModel, QueryResult } from '../types/model';

@Injectable({
  providedIn: 'root'
})
export class GetImageService {
  baseUrl = 'https://60ab7dc75a4de40017cca339.mockapi.io/api/'
  constructor(private httpClient: HttpClient) { }

  protected createParams(params: { [key: string]: any }): HttpParams {
    return Object.keys(params).reduce((m, k) => {
      if (params[k] != null) {
        return m.set(k, params[k].toString())
      }
      return m
    }, new HttpParams())
  }

  getAnimalImage(params: { page: number, limit: number, search: string }): Observable<QueryResult<FoodImageModel>>  {
    return this.httpClient.get<QueryResult<FoodImageModel>>(`${this.baseUrl}/animals`, { params: this.createParams(params) })
  }

  getFoodImage(params: { page: number, limit: number, search: string }): Observable<QueryResult<AnimalModel>>  {
    return this.httpClient.get<QueryResult<AnimalModel>>(`${this.baseUrl}/foods`, { params: this.createParams(params) })
  }

}
