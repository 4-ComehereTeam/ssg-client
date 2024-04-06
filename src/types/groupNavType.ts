import { largeCategoryType } from "@/types/largeCategoryType"


export interface groupNavType{
  group: largeCategoryType[]
  gx: number
  handleOpen: React.MouseEventHandler<HTMLLIElement>
  selectedLCategory: number
  isOpen: Boolean
}