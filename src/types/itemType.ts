export interface ItemType {
  id: number
  thumbnailUrl: string
  alt: string
  name: string
  brand: string
  price: number
  //아래는 없어도 0으로 받음
  discountRate: number
  star: number
  totalReviews: number
}
