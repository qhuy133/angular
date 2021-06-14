export interface FoodImageModel {
  imageUrl: string
  imageName: string
  like: number
  avatarUrl: string
  resolution: number
}

export interface AnimalModel {
  imageUrl: string
  imageName: string
  like: number
  avatarUrl: string
  resolution: number
}

export interface QueryResult<T> {
  count: number
  items: Array<T>
}

